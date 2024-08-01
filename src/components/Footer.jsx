import footerd from "../assets/Maigo.png"

export function Footer() {
    const styled = {width: "200px", background: "pink"};
    return(
        <>
        <img src={footerd} alt="solidjees" style={styled}/>
        <p>&copy; 2024 Yumemories</p>
        </>
    );
}