import { TouchableOpacity as Button } from "react-native"
import React from "react"

export default function PopupLogout ({show, setShow}) {
    /*const [show, setShow] = React.useState(false)
    React.useEffect(() => {
        setShow(props.show)
    })*/
    return (
        <>
            {show ? 
            <div className="bg-black/50 w-screen h-screen flex justify-center items-center absolute top-0">
                <div className="bg-white p-5 px-10 rounded-xl flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center gap-2">
                        <img src={require('../img/Logout.svg')} alt="" className="w-[60px] h-[60px]"/>
                        <div>Yakin ingin keluar?</div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <Button onPress={() => setShow(false)}>
                            <div className="border border-black p-2 px-7 rounded-xl">
                                <div>
                                    Batal
                                </div>
                            </div>
                        </Button>
                        <Button>
                            <div className="bg-[#ff6000] text-white p-2 px-7 rounded-xl">
                                <div>
                                    Keluar
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
            : 
            null}
        </>
    )
}