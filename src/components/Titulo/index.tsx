import React from "react"
import {Titulo as TitulosEstilo} from './styles'

export type Props = {
  children:string;
  fontSize?: number;
}
const Titulo = (props: Props) => <TitulosEstilo fontSize={props.fontSize}>{props.children}</TitulosEstilo>

export default Titulo;
