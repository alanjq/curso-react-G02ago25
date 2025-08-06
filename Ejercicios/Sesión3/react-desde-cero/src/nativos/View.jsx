// Simular un componente de React Native
export default function View({ children, style }) {
    return <div component="view" style={{ display: 'flex',...style}}>
        {children}
    </div>
}
