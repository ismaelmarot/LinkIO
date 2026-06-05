import { useDashboardCard } from './useDashboardCard'
import { Container, Label, Value } from './DashboardCard.styles'

export const DashboardCard = () => {
  const { label, value } = useDashboardCard()

  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  )
}