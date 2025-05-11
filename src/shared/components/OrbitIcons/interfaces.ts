export interface OrbitIconsInterface {
    children?: React.ReactNode;
    items?: OrbitIconsItemInterface[]
};

export interface OrbitIconsItemInterface {
    icon: string,
    onClick?: () => void
}
