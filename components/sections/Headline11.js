

export default function Headline11() {
    return (
        <>
            <div className="headline-area-with-image-two py-30 rpt-20" style={{
                background: 'linear-gradient(135deg, rgba(24, 61, 88, 0.05) 0%, rgba(48, 121, 38, 0.05) 100%)',
                borderTop: '2px solid rgba(24, 61, 88, 0.1)',
                borderBottom: '2px solid rgba(48, 121, 38, 0.1)'
            }}>
                <div className="headline-wrap">
                    <span className="marquee-heading-two style-two">
                        <span className="marquee-inner left" style={{
                            animation: 'marquee-left 30s linear infinite'
                        }}>
                            <span className="marquee-item" style={{
                                padding: '15px 25px',
                                margin: '0 10px',
                                borderRadius: '25px',
                                background: 'linear-gradient(135deg, #183D58 0%, #307926 100%)',
                                color: '#ffffff',
                                boxShadow: '0 8px 25px rgba(24, 61, 88, 0.3)',
                                transition: 'all 0.3s ease',
                                display: 'inline-block',
                                transform: 'scale(1)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.05)';
                                e.target.style.boxShadow = '0 12px 35px rgba(48, 121, 38, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.boxShadow = '0 8px 25px rgba(24, 61, 88, 0.3)';
                            }}>
                                <b style={{fontSize: '18px', fontWeight: '700'}}>Prospection & Vente</b>
                                <b style={{margin: '0 15px', color: '#ffffff', opacity: '0.8'}}>/</b>
                                <span className="text-image" style={{ 
                                    background: 'linear-gradient(135deg, #307926 0%, #183D58 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontWeight: '700',
                                    fontSize: '18px'
                                }}>Négociation</span>
                                <b style={{margin: '0 15px', color: '#ffffff', opacity: '0.8'}}>/</b>
                                <span className="text-border" style={{
                                    color: '#ffffff',
                                    fontWeight: '600',
                                    fontSize: '16px'
                                }}>Management</span>
                                <span className="text-border" style={{
                                    color: '#ffffff',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    marginLeft: '15px'
                                }}>Communication & Influence</span>
                            </span>
                            <span className="marquee-item" style={{
                                padding: '15px 25px',
                                margin: '0 10px',
                                borderRadius: '25px',
                                background: 'linear-gradient(135deg, #307926 0%, #183D58 100%)',
                                color: '#ffffff',
                                boxShadow: '0 8px 25px rgba(48, 121, 38, 0.3)',
                                transition: 'all 0.3s ease',
                                display: 'inline-block',
                                transform: 'scale(1)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.05)';
                                e.target.style.boxShadow = '0 12px 35px rgba(24, 61, 88, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.boxShadow = '0 8px 25px rgba(48, 121, 38, 0.3)';
                            }}>
                                <b style={{fontSize: '18px', fontWeight: '700'}}>Développement personnel</b>
                                <b style={{margin: '0 15px', color: '#ffffff', opacity: '0.8'}}>/</b>
                                <span className="text-image" style={{ 
                                    background: 'linear-gradient(135deg, #183D58 0%, #307926 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontWeight: '700',
                                    fontSize: '18px'
                                }}>Leadership</span>
                                <b style={{margin: '0 15px', color: '#ffffff', opacity: '0.8'}}>/</b>
                                <span className="text-border" style={{
                                    color: '#ffffff',
                                    fontWeight: '600',
                                    fontSize: '16px'
                                }}>Posture professionnelle</span>
                                <span className="text-border" style={{
                                    color: '#ffffff',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    marginLeft: '15px'
                                }}>Croissance personnelle</span>
                            </span>
                            <span className="marquee-item" style={{
                                padding: '15px 25px',
                                margin: '0 10px',
                                borderRadius: '25px',
                                background: 'linear-gradient(135deg, #183D58 0%, #307926 100%)',
                                color: '#ffffff',
                                boxShadow: '0 8px 25px rgba(24, 61, 88, 0.3)',
                                transition: 'all 0.3s ease',
                                display: 'inline-block',
                                transform: 'scale(1)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.05)';
                                e.target.style.boxShadow = '0 12px 35px rgba(48, 121, 38, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.boxShadow = '0 8px 25px rgba(24, 61, 88, 0.3)';
                            }}>
                                <b style={{fontSize: '18px', fontWeight: '700'}}>Mieux-être durable</b>
                                <b style={{margin: '0 15px', color: '#ffffff', opacity: '0.8'}}>/</b>
                                <span className="text-image" style={{ 
                                    background: 'linear-gradient(135deg, #307926 0%, #183D58 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontWeight: '700',
                                    fontSize: '18px'
                                }}>Prospection & Vente</span>
                                <b style={{margin: '0 15px', color: '#ffffff', opacity: '0.8'}}>/</b>
                                <span className="text-border" style={{
                                    color: '#ffffff',
                                    fontWeight: '600',
                                    fontSize: '16px'
                                }}>Négociation</span>
                                <span className="text-border" style={{
                                    color: '#ffffff',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    marginLeft: '15px'
                                }}>Leadership</span>
                            </span>
                        </span>
                    </span>
                </div>
                <style jsx>{`
                    @keyframes marquee-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-100%); }
                    }
                    .marquee-inner {
                        display: flex;
                        white-space: nowrap;
                    }
                    .marquee-item {
                        flex-shrink: 0;
                    }
                    .marquee-item:hover {
                        transform: scale(1.05) !important;
                    }
                `}</style>
            </div>
        </>
    )
}
