import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  padding: 0 var(--space-md) 100px;
`

export const TitleRow = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-lg) 0;
  position: relative;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: var(--color-text-primary);
  letter-spacing: -1px;
  margin: 0;
  text-align: center;
`

export const ActionButton = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-lg);
  background: linear-gradient(135deg, rgb(253,122,45) 0%, rgb(245,28,81) 100%);
  color: white;
  border: none;
  border-radius: var(--radius-xxl);
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);

  &:hover {
    background: linear-gradient(135deg, rgb(200,95,35) 0%, rgb(180,20,60) 100%);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
  }
`

export const Content = styled.main`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`

export const SectionHeader = styled.div`
  margin-bottom: var(--space-lg);
`

export const SectionTitle = styled.h2`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin: var(--space-xl) 0 var(--space-md);
`

export const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border), transparent);
  margin-bottom: var(--space-xl);
`

export const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-xl);
  width: 100%;
`

export const EmptyState = styled.div`
  text-align: center;
  padding: var(--space-3xl) var(--space-xl);
  background: var(--color-card-bg);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  
  svg {
    width: 64px;
    height: 64px;
    color: var(--color-text-tertiary);
    opacity: 0.5;
    margin-bottom: var(--space-md);
  }
  
  h3 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0 0 var(--space-sm);
  }
  
  p {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
    margin: 0;
  }
`

export const StatsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-2xl);
  padding: var(--space-lg) 0;
  margin-bottom: var(--space-xl);
`

export const StatItem = styled.div`
  text-align: center;
  
  span {
    display: block;
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: var(--color-primary);
  }
  
  label {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
  }
`