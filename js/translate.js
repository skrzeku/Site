

$(function translatore() {

  var t = {
    "Toggle navigation": {
      pt: "Mostrar/esconder navegação"
    },
    "Główna": {
      en: "Home"
    },
    About: {
      pt: "Acerca"
    },
    "Language": {
      pt: "Idioma"
    },
    "siemano": {
      en: "Hi"
    },
    subtitle_key: {
      en: "translate.js is a jQuery plugin to translate text in the client side.",
      pt: "translate.js é um plugin JQuery para traduzir texto client side."
    },
    "Usage: translate entire page": {
      pt: "Uso: traduzir uma página inteira"
    },
    "Usage: translate a string": {
      pt: "Uso: traduzir uma string"
    },
    step1: {
      en: "include JQuery and translate.js in your page",
      pt: "incluir JQuery e translate.js na página"
    },
    step2: {
      en: "every text you want translated include the <code>trn</code> class",
      pt: "incluir a classe <code>trn</code> no texto a traduzir"
    },
    step3: {
      en: "create your dictionary",
      pt: "criar o dicionário"
    },
    step4: {
      en: "initialize the plugin and translate the entire page body",
      pt: "iniciar o plugin e traduzir o body da página"
    },
    step5: {
      en: "change to another language",
      pt: "mudar para outro idioma"
    },
    "O mnie": {
      en: "About Me"
      
    },
    "Kontakt": {
      en: "Contact"
    },
    "translate to Portuguese": {
      pt: "traduzir para Português"
    },
    string_translate_key: {
      en: "After you initialize the component you can translate a string",
      pt: "Depois do componente iniciado, pode-se traduzir uma string"
    },
    "Download translate.js": {
      pt: "Descarregar translate.js"
    },
      "Siemano": {
          en: "HALLO"
      }
  };
    
   
  var _t = $('body').translate({lang: "pl", t: t});
  var str = _t.g("translate");
  console.log(str);


  $(".lang_selector").click(function(ev) {
      
    var lang = $(this).attr("data-value");
    _t.lang(lang);
      if (lang =="en") {
         
        $.cookie('lang', '1', { expires: 7 });
      }
      if (lang =="pl"){
         $.cookie('lang', '2', { expires: 7 });
      }
      
    
      

    console.log(lang);
     ev.preventDefault(); 
  });



});
