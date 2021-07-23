const removeSpacesAndNewlines = (text) => text.replace(/ /g, '').replace(/\n/g, '').replace(/\r/g, '')
export default removeSpacesAndNewlines
