import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar 2 comentários', () => {
        render(<PostComment />);
        
        fireEvent.change(screen.getByTestId('txa-comment'), { 
            target: { value: 'Primeiro comentário' } 
        });
        fireEvent.click(screen.getByTestId('btn-comment'));

        fireEvent.change(screen.getByTestId('txa-comment'), {
            target: { value: 'Segundo comentário' }
        });
        fireEvent.click(screen.getByTestId('btn-comment'))
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
    
});