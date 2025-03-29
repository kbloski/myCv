import style from './OrbitIcons.module.scss'
import { OrbitIconsItemProp, OrbitIconsProps } from "./type";

type OrbitGroupsType = [OrbitIconsItemProp, OrbitIconsItemProp?][]

function OrbitIcons({ children, items} : OrbitIconsProps){
    

    function createItemsGroups() :  OrbitGroupsType
    {
        const initialValue: OrbitGroupsType = [];

        if (items?.length) 
        {
            return items.reduce(( acc: OrbitGroupsType , item , index, arr) => 
            {
                if (index % 2 === 0) {
                    if (!arr[index+1]) acc.push([item])
                    else acc.push([item, arr[index+1]])
                };

                return acc;
            }, [])
        } 
        else return initialValue
    }

    const orbitGroups = createItemsGroups()

    console.log( orbitGroups)

    return <div className={style.orbitContainer}>
        <div>
            <div className={style.orbitContent}>
                <div>
                    { children }
                </div>

                {/* Orbit items */}
                <div className={style.orbitItemsContainer}>
                    {   orbitGroups.length && orbitGroups.map( 
                        (group, groupIndex) => {
                            return <div className={style[`orbitItem-${groupIndex}`]}>
                                { 
                                    group.map( item => 
                                        <span className={item?.icon + ' ' + style.orbitIcon}/>
                                    )
                                }
                            </div> 
                        }
                    ) }
                </div>
            </div>
        </div>
    </div>
}

export default OrbitIcons;