import "../Css/StylesComp/SectionHeader.css";

export function SectionHeader({ title, length, cont, handleCont }){
    return(
        <section className="JS--Section--Header">
            <h1>{title}</h1>
            <article className="JS--article--Length">
                <input type="range" min={1} max={length} value={cont} onChange={handleCont} disabled  readOnly/>
                <span>{cont} of {length}</span>
            </article>
        </section>
    )
}