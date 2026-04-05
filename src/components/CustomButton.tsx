import "../styles/customButton.css"

interface CustomButtonProps {
    buttonName: string
    onClick: () => void
}

export default function CustomButton({ buttonName, onClick }: CustomButtonProps) {
    return (
        <div className="customButton">
            <button onClick={onClick}>{buttonName}</button>
        </div>
    );
}