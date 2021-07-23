/* global describe, it */
// import { shallowMount } from '@vue/test-utils'
// import app from '@/App.vue'
import ASTParser from '@/engine/classes/ASTParser'
import Settings from '@/engine/classes/Settings'
import removeSpacesAndNewlines from './utils/removeSpacesAndNewlines'
import localStorage from './utils/localStorage'
import * as fs from 'fs'
import process from 'process'
import expect from 'expect'
import path from 'path'

Settings.getInstance().setSettings({
    baseSelector: '',
    indentSize: 4,
    fromWidth: 1366,
    toWidth: 1024,
    copyToClipboard: false,
    addUnlock: true,
    wrapIntoMedia: false,
    shake: false,
    unlockToStartValue: false,
    layoutWidth: '',
    parser: 'ast'
})

global.localStorage = localStorage

describe('Test AST parser', () => {
    const cwd = process.cwd()
    const testsDataDirPath = `${cwd}/tests/unit/parserTestSCSS`
    const testsDataDirContent = fs
        .readdirSync(testsDataDirPath, {
            encoding: 'utf8',
            withFileTypes: true
        })
        .filter((dirent) => dirent.isFile())
        .map((dirent) => dirent.name)
        .filter((fileName) => path.extname(fileName) === '.scss')
    testsDataDirContent.forEach((fileName) => {
        const scssOriginal = fs.readFileSync(`${testsDataDirPath}/${fileName}`, { encoding: 'utf8' })
        const parser = new ASTParser(scssOriginal)
        const styleTree = parser.parse()
        const scssAfterParser = styleTree.toLockString()
        it(fileName, () => {
            expect(removeSpacesAndNewlines(scssAfterParser)).toBe(removeSpacesAndNewlines(scssOriginal))
        })
    })
})
