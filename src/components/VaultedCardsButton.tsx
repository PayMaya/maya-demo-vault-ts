import { MouseEventHandler } from 'react';
import RedirectButton from "./RedirectButton"

interface HomeButtonProps {
    onClick?: MouseEventHandler
}

function VaultedCardsButton({ onClick }: HomeButtonProps) {
    return (
        <div className="button-container nav-bar-item">
            <RedirectButton display='Cards' url='/cards' className='btn' onClick={onClick} />
        </div>
    )
}

export default VaultedCardsButton