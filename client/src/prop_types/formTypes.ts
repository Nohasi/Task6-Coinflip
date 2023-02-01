export default interface formTypes {
    setResult: React.Dispatch<React.SetStateAction<string>>,
    setRounds: React.Dispatch<React.SetStateAction<never[]>>,
    setPageInteraction: React.Dispatch<React.SetStateAction<boolean>>
    setErrorStatus: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}