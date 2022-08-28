

const Button = ({title, style})=>{
        
    return(
        <button
            className="bg-black text-white px-8 py-3"
            style={{
                ...style
            }}
        >  
        {title} 
        </button>
    );

}

export default Button