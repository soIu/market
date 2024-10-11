export default function SearchInput (original_props) {
    const { style, ...props } = original_props;
    return (
        <div className='px-5 w-full' style={style}>
            <div className="bg-white shadow-xl h-11 border-2 rounded-3xl flex items-center overflow-hidden gap-3 px-3">
                <div className="w-9 h-8 bg-black rounded-full">
                    <img src={require('../img/Search.svg')} alt="" className='object-cover w-full h-full' />
                </div>
                <input type="text" className='w-full h-full outline-none' placeholder="Mau beli apa hari ini?" {...props}/>
            </div>
        </div>
    )
}