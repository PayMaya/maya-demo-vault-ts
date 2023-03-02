interface AccordionProps {
    header: string,
    children: React.ReactNode,
    group: string,
    index: string
}

export function Accordion({ header, children, group, index }: AccordionProps) {
    return (
        <div className="accordion-container">
            <input type="radio" className="accordion-state" id={`accordion-state-${index}`} name={ group } hidden/>
            <label htmlFor={`accordion-state-${index}`}>
                <div className="accordion-button">
                    { header }
                    <p className="accordion-caret">&#9660;</p>
                </div>
            </label>
            <div className="accordion-content">
                <div className="accordion-inner">
                   {children} 
                </div>
            </div>
        </div>
    )
}