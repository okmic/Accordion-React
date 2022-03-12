import { memo, useEffect, useState } from "react"
import styles from './Accordion.module.css'

type PropsType = {
    title: string
    accordion: string
    setAccordion: (a: string) => void
}

const Accordion: React.FC<PropsType> = ({title, accordion, setAccordion}) => {

    const [active, setActive] = useState(false)

    const handleSubmit = () => {
        if(!active) {
            setActive(true)
            setAccordion(title)
        } else {
            setAccordion("Title")
            setActive(false)
        }
    }
    useEffect(() => {
            if (title !== accordion){
                setActive(false)
            }   
    }, [accordion])

    return <div className={styles.accordion}>
        <div className={styles.accordionHeading}>
            <div className={styles.container} onClick={handleSubmit}>
                <p>{title}</p>
                <span>
                    {accordion === title ? "X" : "|||"}
                </span>
            </div>
        </div>
        <div className={(accordion === title ? styles.show : "") + " " + styles.accordionContent}>
            <div className={styles.container}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates at autem odit, accusamus est voluptatum fugit inventore eum placeat amet excepturi! Tenetur quaerat cum dolor quae totam, recusandae assumenda velit.
                </p>

            </div>
        </div>
    </div>
}

export default memo(Accordion)