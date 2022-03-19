import React from 'react'

/**
 * This button is generic and used in all app
 * @param ButtonGenInterface 
 * @returns {JSX.Element}
 */
 export const ButtonGeneric = ({typeButton,bgColor,hoverBgButton,
    textColor,fontWeigth,textColorHover,
    paddingY,paddingX,borderButton,
    borderButtonColor,borderButtonColorHover,
    formButton,textContent,wigthButton,onClick}) =>{


return(
<div>
<button 
type={typeButton?typeButton:"submit"} 
className={`${bgColor?bgColor:'bg-transparent'} 
${hoverBgButton?hoverBgButton:'hover:bg-blue-500'} 
${textColor?textColor:'text-blue-700' }
${fontWeigth?fontWeigth:'font-semibold'} 
${textColorHover?textColorHover:'hover:text-white'} 
${paddingY?paddingY:'py-2'} 
${paddingX?paddingX:'px-4'} 
${borderButton?borderButton:'border'} 
${borderButtonColor?borderButtonColor:'border-blue-500'} 
${borderButtonColorHover?borderButtonColorHover:'hover:border-transparent'} 
${formButton?formButton:'rounded'}
${wigthButton?wigthButton:'w-1/6'}`}
onClick={onClick}
>{textContent?textContent:'Submit'}</button>
</div>
)
}