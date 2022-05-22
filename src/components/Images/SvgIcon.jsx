import { Icon } from '@mui/material';
import React from 'react';


/**
 * @description use this component to render svg icon
 * @author satyam_kushwaha
 * @date 02/05/2022
 * @param src: icon url
 * @param alt?: icon alt description
 */
const SvgIcon = (props) => (
    <Icon style={{display: "flex"}} fontSize='tiny'>
        <img src={props.src || props.icon || props.url || props.href} alt={props.alt || props.title || "svg icon"} width={"100%"} height={"100%"} />
    </Icon>
)
export default SvgIcon