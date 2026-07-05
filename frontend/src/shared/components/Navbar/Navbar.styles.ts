import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 100;

  @media (min-width: 768px) {
    flex-direction: column;
    top: 0;
    right: auto;
    width: 80px;
    padding: ${({ theme }) => theme.spacing.lg} 0;
    border-top: none;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const NavItem = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.textMuted};
  transition: color 0.2s;

  @media (min-width: 768px) {
    gap: 4px;
    padding: ${({ theme }) => theme.spacing.md};
  }
`

export const Icon = styled.svg<{ $active: boolean }>`
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`

export const Label = styled.span`
  display: none;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;

  @media (min-width: 768px) {
    display: block;
  }
`