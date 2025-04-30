export default function Saudacao({ exibir }) {
    return (
        <div>
            {/* Condicional no React */}
            {exibir ? <p>Mensagem visível</p> : null}
        </div>
    )
}