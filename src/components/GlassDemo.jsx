import React, { useState } from 'react';
import '../styles/glass.css';
import BackgroundGradient from './ui/BackgroundGradient/BackgroundGradient';
import Toggle from './ui/Toggle/Toggle';

const GlassDemo = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const mode = isDarkMode ? 'Dark Mode BG' : 'Light Mode BG';
    const textColor = isDarkMode ? '#f5f5f5' : '#1a1a1a';

    return (
        <div className="component-section">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px solid #e4e6ea'
            }}>
                <h2 className="component-section-title" style={{ margin: 0, border: 'none', padding: 0 }}>Glass Material Demo</h2>
                <Toggle
                    checked={isDarkMode}
                    onChange={(e) => setIsDarkMode(e.target.checked)}
                    label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
                    size="medium"
                />
            </div>

            <div style={{
                position: 'relative',
                width: '100%',
                minHeight: '800px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0'
            }}>
                {/* Background Layer */}
                <BackgroundGradient
                    mode={mode}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />

                {/* Content Layer */}
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    minHeight: '600px',
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '32px',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}>

                    {/* Demo 1: Glass on Glass Layering */}
                    <div style={{ position: 'relative', width: '600px', height: '450px' }}>
                        {/* <h4 style={{ color: textColor, marginBottom: '20px', textAlign: 'center' }}>Glass Light Stack</h4> */}

                        {/* Layer 1: Base Card (Glass Light) */}
                        <div className="glass-card" style={{
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            width: '250px',
                            height: '250px',
                            padding: '32px',
                            color: '#1a1a1a'
                        }}>
                            <div className="glass-noise-layer"></div>
                            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '600' }}>Base Layer</h3>
                            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', color: '#333' }}>
                                Initial glass surface.
                            </p>
                        </div>

                        {/* Layer 2: On Glass Card (On Glass Light) - Overlapping */}
                        <div className="glass-card-on-light" style={{
                            position: 'absolute',
                            top: '150px',
                            left: '150px',
                            width: '250px',
                            height: '250px',
                            padding: '32px',
                            color: '#1a1a1a',
                            zIndex: 2
                        }}>
                            <div className="glass-noise-layer"></div>
                            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '600' }}>Layer 2</h3>
                            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', color: '#333' }}>
                                Sits on top. Stronger blur & shadow.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GlassDemo;
