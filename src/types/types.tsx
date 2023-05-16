import { TargetAndTransition, VariantLabels } from "framer-motion";

export type Experience = {
    name: string;
    achievements: string[];
    role: string;
    location: string;
    period: string;
}

export type Option = {
    title: String;
    navigate: () => void;
    style: {};
    hoverAnimation: TargetAndTransition | VariantLabels | undefined
    
}

export type Menu = {
    buttonStyle: React.CSSProperties;
    menuStyle: React.CSSProperties;
}

export type Project = {
    img: string
    name: string
    width?: number 
}