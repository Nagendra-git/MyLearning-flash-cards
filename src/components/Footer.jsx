function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '1.5rem',
      borderTop: '1px solid #eee',
      color: '#888',
      fontSize: '0.9rem'
    }}>
      © {new Date().getFullYear()} MyLearnCards. All rights reserved.
    </footer>
  )
}

export default Footer
