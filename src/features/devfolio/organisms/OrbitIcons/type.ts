export type OrbitIconsProps = {
    children?: React.ReactNode;
    items?: OrbitIconsItemProp[]
};

export type OrbitIconsItemProp = {
    icon: string,
    onClick?: () => void
}
