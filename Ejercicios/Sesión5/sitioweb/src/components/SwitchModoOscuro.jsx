import IconLight from '../icons/IconSun.svg'
import IconDark from '../icons/IconMoon.svg'
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

export default function SwitchModoOscuro() {
    const { modoOscuro, setModoOscuro } = useContext(DarkModeContext)

    const handleModoOscuro = () => {
        setModoOscuro(!modoOscuro)
    }

    return (
        <section>
            <img src={modoOscuro ? IconLight : IconDark} height={50} onClick={handleModoOscuro} />
        </section>
    )
}
