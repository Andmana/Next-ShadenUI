const ValidationMessage = ({ message }) => {
    return <>{message && <p className="text-sm text-red-500">{message}</p>}</>;
};

export default ValidationMessage;
