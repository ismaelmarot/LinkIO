import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 500px;
  margin: 0 auto;
`

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 50%;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }
`

export const Photo = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  line-height: 1.5;
`

export const MetaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
`

export const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const FavoriteButton = styled(ActionButton)<{ $active: boolean }>`
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.textMuted};
`

export const DuplicateButton = styled(ActionButton)`
  color: ${({ theme }) => theme.colors.textMuted};
`

export const LoadingState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.textMuted};
`