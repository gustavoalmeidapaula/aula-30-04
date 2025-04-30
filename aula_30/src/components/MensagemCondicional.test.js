import { render, screen } from '@testing-library/react'
import { MensagemCondicional } from './MensagemCondicional'


test('mensagem deve aparecer na tela quando for true', () => {
    render(<MensagemCondicional exibir={true} />)

    // PROCURA O ELEMENTO NA TELA, SE NÃO ENCONTRAR DARÁ ERRO
    const msg = screen.getByText('Mensagem visível')
    expect(msg).toBeInTheDocument()
})

test('mensagem não deve aparecer quando exibir false', () => {
    render(<MensagemCondicional exibir={false} />)

    // parecido com getBy, mas não dá erro se não achar
    const msg = screen.queryByText('Mensagem visível')
    expect(msg).not.toBeInTheDocument()
})