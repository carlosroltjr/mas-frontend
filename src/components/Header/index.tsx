import { Container, Content } from './styles'

interface HeaderProps {
    onOpenActivityModal: () => void
    onOpenCourseUnitModal: () => void
}

export function Header({ onOpenActivityModal, onOpenCourseUnitModal }: HeaderProps){
    return(
        <Container>
            <Content>
                <h1>My Activities Space</h1>
                <div>
                    <button type="button"
                        onClick={onOpenCourseUnitModal}
                    >
                        Nova Unidade Curricular
                    </button>
                    <button type="button"
                        onClick={onOpenActivityModal}
                    >
                        Nova Atividade
                    </button>
                </div>
            </Content>
        </Container>
    )
}