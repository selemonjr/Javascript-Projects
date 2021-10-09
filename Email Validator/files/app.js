const search = "selemonjrgmail.com"
async function validate() {
    const resp = await fetch("https://covid-api.mmediagroup.fr/v1/cases")
    const respData = await resp.json()
    console.log(respData)
}
validate()

//create a function
