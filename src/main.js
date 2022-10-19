import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

//para cor e logo do cartao
function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    matercard: ["#DF6F29", "#C69347"],
    //nubank: ["#190632", "#8A05BE"],
    default: ["black", "gray"]
  }

  //1º atributo = nome; 2º atributo = cor
  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor01.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

//tornando a funcao global, executavel o console - window
globalThis.setCaardType = setCardType

//adicionando mascara em security code
const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "0000"
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)

const expirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask: "00{/}00"
}

const expirationDateMasked = IMask(expirationDate, expirationDatePattern)
