    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
            "on-surface-variant": "#ECDBBA",
            "on-tertiary-container": "#ffffff",
            "on-background": "#ECDBBA",
            "error": "#ffb4ab",
            "surface-container-low": "#1f1f1f",
            "on-tertiary-fixed": "#161616",
            "tertiary-container": "#346751",
            "on-primary": "#ffffff",
            "on-secondary-container": "#ECDBBA",
            "outline": "#346751",
            "primary-fixed": "#ffdad3",
            "on-primary-fixed": "#3e0500",
            "on-error-container": "#ffdad6",
            "error-container": "#93000a",
            "surface-container-lowest": "#0c0c0c",
            "outline-variant": "#346751",
            "background": "#161616",
            "primary": "#C84B31",
            "primary-fixed-dim": "#C84B31",
            "on-tertiary-fixed-variant": "#ECDBBA",
            "surface": "#161616",
            "surface-container": "#1d1d1d",
            "inverse-primary": "#C84B31",
            "inverse-surface": "#ECDBBA",
            "secondary-fixed-dim": "#346751",
            "on-primary-container": "#ffffff",
            "primary-container": "#C84B31",
            "surface-bright": "#2a2a2a",
            "on-surface": "#ECDBBA",
            "on-tertiary": "#ffffff",
            "on-secondary-fixed": "#161616",
            "surface-variant": "#252525",
            "on-primary-fixed-variant": "#C84B31",
            "surface-container-highest": "#2a2a2a",
            "surface-dim": "#161616",
            "surface-container-high": "#242424",
            "on-error": "#690005",
            "secondary-container": "#346751",
            "inverse-on-surface": "#161616",
            "on-secondary": "#ffffff",
            "secondary-fixed": "#346751",
            "tertiary-fixed": "#ECDBBA",
            "tertiary": "#346751",
            "on-secondary-fixed-variant": "#ECDBBA",
            "secondary": "#346751",
            "surface-tint": "#C84B31",
            "tertiary-fixed-dim": "#346751"
          },
          "borderRadius": {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
          "fontFamily": {
            "headline": ["Inter"],
            "body": ["Inter"],
            "label": ["Inter"]
          }
        }
      }
    }


const caixa = document.getElementById("input_checkbox")

caixa.addEventListener("click", () => {

  const saida = document.getElementById("p_saida")
  const entrada = document.getElementById("p_entrada")
  if(caixa.checked){
    saida.style.color = "#5555"
    entrada.style.color = "#7a9e78"
  } else if(!caixa.checked){
    saida.style.color = "#b43d25"
    entrada.style.color = "#5555"
  }
})