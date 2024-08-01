import logo from "../assets/togetoge.svg"

export function Header(){
    const styled = {width: "200px"};
    return(
        <>
        <img src={logo} alt="SolidJS" style={styled} />
       
        </>
    );
}