import React, { useState } from 'react';
import {
    IconButton,
    Button,
    ButtonDanger,
    // InputField,
    // TextArea,
    // Dropdown, // Used in test components
    // Search,
    // Chip, // Used in test components
    // ChipList, // Used in test components
    // StatusIndicator, // Used in test components
    // Badge, // Used in test components
    // Notification, // Used in test components
    // Tab, // Used in test components
    // Modal, // Used in test components
    // ItemRow, // Used in test components
    // DropdownNestedColumn, // Used in test components
    // DropdownNested, // Used in test components
    // Categories, // Used in test components
    BackgroundGradient,
    // Checkbox, // Used in test components
    Radio,
    Toggle,
    // Table, // Used in test components
    // Pagination, // Used in test components
    // Cell, // Used in test components
    // Breadcrumb, // Used in test components
    // Avatar, // Used in test components
    Icon,
    allIcons as iconListData
} from 'squarex-ui-component-lib';

// Local test components (not in library)
import ToastTest from './ui/Toast/ToastTest';
import ToggleTest from './ui/Toggle/ToggleTest';
import TableTest from './ui/Table/TableTest';
import GlassDemo from './GlassDemo';
import GlassDarkDemo from './GlassDarkDemo';
import AvatarTest from './ui/Avatar/AvatarTest';
import TabTest from './ui/Tab/TabTest';
import BadgeTest from './ui/Badge/BadgeTest';
import BreadcrumbTest from './ui/Breadcrumb/BreadcrumbTest';
import CellTest from './ui/Cell/CellTest';
import ChipTest from './ui/Chip/ChipTest';
import ChipListTest from './ui/ChipList/ChipListTest';
import CategoriesTest from './ui/Categories/CategoriesTest';
import CheckboxTest from './ui/Checkbox/CheckboxTest';
import DropdownTest from './ui/Dropdown/DropdownTest';
import DropdownNestedTest from './ui/DropdownNested/DropdownNestedTest';
import InputFieldTest from './ui/InputField/InputFieldTest';
import ItemRowTest from './ui/ItemRow/ItemRowTest';
import ModalTest from './ui/Modal/ModalTest';
import NotificationTest from './ui/Notification/NotificationTest';
import PaginationTest from './ui/Pagination/PaginationTest';
import RadioTest from './ui/Radio/RadioTest';
import SearchTest from './ui/Search/SearchTest';
import StatusIndicatorTest from './ui/StatusIndicator/StatusIndicatorTest';
import TextAreaTest from './ui/TextArea/TextAreaTest';
import './ComponentLibrary.css';

// const TextAreaTest = () => <div className="p-4 border border-dashed rounded">TextAreaTest Placeholder</div>;
// const ChipTestPlaceholder = () => <div className="p-4 border border-dashed rounded">ChipTest Placeholder</div>;
// const ChipListTestPlaceholder = () => <div className="p-4 border border-dashed rounded">ChipListTest Placeholder</div>;

const ComponentLibrary = () => {
    const [activeTab, setActiveTab] = useState('iconbutton');
    const [iconSearchQuery, setIconSearchQuery] = useState('');
    const styles = ['primary', 'secondary', 'neutral', 'subtle'];
    const dangerStyles = ['primary', 'neutral', 'subtle'];
    const states = ['default', 'hover', 'focus', 'disabled', 'loading'];
    const sizes = ['medium', 'small'];

    const tabs = [
        { id: 'avatar', label: 'Avatar' },
        { id: 'backgroundgradient', label: 'BackgroundGradient' },
        { id: 'badge', label: 'Badge' },
        { id: 'breadcrumb', label: 'Breadcrumb' },
        { id: 'button', label: 'Button' },
        { id: 'buttondanger', label: 'ButtonDanger' },
        { id: 'categories', label: 'Categories' },
        { id: 'cell', label: 'Cell' },
        { id: 'checkbox', label: 'Checkbox' },
        { id: 'chips', label: 'Chips' },
        { id: 'dropdown', label: 'Dropdown' },
        { id: 'dropdownnested', label: 'DropdownNested' },
        { id: 'iconbutton', label: 'IconButton' },
        { id: 'icons', label: 'Icons' },
        { id: 'inputfield', label: 'InputField' },
        { id: 'itemrow', label: 'ItemRow' },
        { id: 'modal', label: 'Modal' },
        { id: 'notification', label: 'Notification' },
        { id: 'pagination', label: 'Pagination' },
        { id: 'radio', label: 'Radio' },
        { id: 'search', label: 'Search' },
        { id: 'statusindicator', label: 'StatusIndicator' },
        { id: 'tab', label: 'Tab' },
        { id: 'table', label: 'Table' },
        { id: 'textarea', label: 'TextArea' },
        { id: 'toast', label: 'Toast' },
        { id: 'toggle', label: 'Toggle' },
        { id: 'glass', label: 'Glass Material' },
        { id: 'glass-dark', label: 'Glass Dark' }
    ];

    const renderIconButtonComponent = () => (
        <div className="component-section">
            <h2 className="component-section-title">IconButton Component</h2>
            <div className="component-grid-container">
                <div className="component-grid">
                    {/* Header row with state labels */}
                    <div className="component-grid-header">
                        <div className="component-grid-header-cell"></div>
                        {states.map((state) => (
                            <div key={state} className="component-grid-header-cell">
                                {state.charAt(0).toUpperCase() + state.slice(1)}
                            </div>
                        ))}
                    </div>

                    {/* Rows for each style */}
                    {styles.map((style) => (
                        <div key={style} className="component-grid-row">
                            <div className="component-grid-row-label">
                                {style.charAt(0).toUpperCase() + style.slice(1)}
                            </div>
                            {states.map((state) => (
                                <div key={state} className="component-grid-cell">
                                    <div className="component-grid-cell-content">
                                        {sizes.map((size) => (
                                            <div key={size} className="component-grid-item">
                                                <div className="component-label">
                                                    {size.charAt(0).toUpperCase() + size.slice(1)}
                                                </div>
                                                <IconButton
                                                    style={style}
                                                    state={state}
                                                    size={size}
                                                    onClick={() => console.log(`IconButton: ${style} ${state} ${size}`)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderButtonComponent = () => (
        <div className="component-section">
            <h2 className="component-section-title">Button Component</h2>
            <div className="component-grid-container">
                <div className="component-grid">
                    {/* Header row with state labels */}
                    <div className="component-grid-header">
                        <div className="component-grid-header-cell"></div>
                        {states.map((state) => (
                            <div key={state} className="component-grid-header-cell">
                                {state.charAt(0).toUpperCase() + state.slice(1)}
                            </div>
                        ))}
                    </div>

                    {/* Rows for each style */}
                    {styles.map((style) => (
                        <div key={style} className="component-grid-row">
                            <div className="component-grid-row-label">
                                {style.charAt(0).toUpperCase() + style.slice(1)}
                            </div>
                            {states.map((state) => (
                                <div key={state} className="component-grid-cell">
                                    <div className="component-grid-cell-content">
                                        {sizes.map((size) => (
                                            <div key={size} className="component-grid-item">
                                                <div className="component-label">
                                                    {size.charAt(0).toUpperCase() + size.slice(1)}
                                                </div>
                                                <Button
                                                    label="Button"
                                                    showLeadingIcon={true}
                                                    showTrailingIcon={false}
                                                    style={style}
                                                    state={state}
                                                    size={size}
                                                    onClick={() => console.log(`Button: ${style} ${state} ${size}`)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderButtonDangerComponent = () => (
        <div className="component-section">
            <h2 className="component-section-title">ButtonDanger Component</h2>
            <div className="component-grid-container">
                <div className="component-grid">
                    {/* Header row with state labels */}
                    <div className="component-grid-header">
                        <div className="component-grid-header-cell"></div>
                        {states.map((state) => (
                            <div key={state} className="component-grid-header-cell">
                                {state.charAt(0).toUpperCase() + state.slice(1)}
                            </div>
                        ))}
                    </div>

                    {/* Rows for each style */}
                    {dangerStyles.map((style) => (
                        <div key={style} className="component-grid-row">
                            <div className="component-grid-row-label">
                                {style.charAt(0).toUpperCase() + style.slice(1)}
                            </div>
                            {states.map((state) => (
                                <div key={state} className="component-grid-cell">
                                    <div className="component-grid-cell-content">
                                        {sizes.map((size) => (
                                            <div key={size} className="component-grid-item">
                                                <div className="component-label">
                                                    {size.charAt(0).toUpperCase() + size.slice(1)}
                                                </div>
                                                <ButtonDanger
                                                    label="Button"
                                                    showLeadingIcon={true}
                                                    showTrailingIcon={false}
                                                    style={style}
                                                    state={state}
                                                    size={size}
                                                    onClick={() => console.log(`ButtonDanger: ${style} ${state} ${size}`)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderSearchComponent = () => {
        return (
            <>
                <div className="component-section">
                    <SearchTest />
                </div>
            </>
        );
    };

    const renderChipComponent = () => {
        return (
            <>
                <div className="component-section">
                    <ChipTest />
                </div>
                <div className="component-section">
                    <ChipListTest />
                </div>
            </>
        );
    };

    const renderStatusIndicatorComponent = () => {
        return (
            <div className="component-section">
                <StatusIndicatorTest />
            </div>
        );
    };

    const renderModalComponent = () => {
        return (
            <>
                {/* Modal Test Component */}
                <div className="component-section">
                    <ModalTest />
                </div>
            </>
        );
    };

    const renderToastComponent = () => {
        return (
            <>
                {/* Toast Test Component */}
                <div className="component-section">
                    <ToastTest />
                </div>
            </>
        );
    };



    const BackgroundGradientWrapper = () => {
        const [isDarkMode, setIsDarkMode] = React.useState(false);
        const mode = isDarkMode ? 'Dark Mode BG' : 'Light Mode BG';

        return (
            <div className="component-section" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ padding: '16px 16px 0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 className="component-section-title" style={{ marginBottom: '16px', borderBottom: 'none' }}>BackgroundGradient Component</h2>
                    <div style={{ marginBottom: '16px' }}>
                        <Toggle
                            checked={isDarkMode}
                            onChange={(e) => setIsDarkMode(e.target.checked)}
                            label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
                            size="medium"
                        />
                    </div>
                </div>

                <div style={{ padding: '0 16px 16px 16px' }}>
                    <div style={{
                        width: '100%',
                        height: '700px',
                        position: 'relative',
                        border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
                        borderRadius: '12px',
                        overflow: 'hidden',
                    }}>
                        <BackgroundGradient mode={mode} />
                        <div style={{
                            position: 'absolute',
                            top: '12px',
                            left: '12px',
                            padding: '4px 10px',
                            background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                            borderRadius: '20px',
                            fontSize: '11px',
                            fontWeight: '600',
                            color: isDarkMode ? '#fff' : '#2f353b',
                            backdropFilter: 'blur(4px)',
                            zIndex: 10
                        }}>
                            {mode}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderBackgroundGradientComponent = () => <BackgroundGradientWrapper />;

    const renderIconsComponent = () => {
        // Icon sizes to display (8 sizes matching first image: 48, 40, 32, 24, 20, 16, 14, 12)
        const iconSizes = [48, 40, 32, 24, 20, 16, 14, 12];

        // All available icons from public/icon folder (358 icons)
        // Each icon displays all 8 size variants
        const allIcons = iconListData;

        const filteredIcons = allIcons.filter(icon =>
            icon.label.toLowerCase().includes(iconSearchQuery.toLowerCase()) ||
            icon.name.toLowerCase().includes(iconSearchQuery.toLowerCase())
        );

        return (
            <>
                {/* All Icons Grid - Matching First Image Design */}
                <div className="component-section">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '24px',
                        paddingBottom: '16px',
                        borderBottom: '1px solid #e4e6ea'
                    }}>
                        <h2 className="component-section-title" style={{ margin: 0 }}>
                            All Icons ({filteredIcons.length} icons)
                        </h2>
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            width: '300px'
                        }}>
                            <div style={{
                                position: 'absolute',
                                left: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                pointerEvents: 'none'
                            }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#768494" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 14L11.1 11.1" stroke="#768494" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search icons by name..."
                                value={iconSearchQuery}
                                onChange={(e) => setIconSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px 12px 10px 40px',
                                    borderRadius: '8px',
                                    border: '1.5px solid #d6dadf',
                                    fontSize: '14px',
                                    fontFamily: "'Host Grotesk', sans-serif",
                                    outline: 'none',
                                    transition: 'all 0.2s ease',
                                    background: '#ffffff',
                                    color: '#2f353b'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#4432bf';
                                    e.target.style.boxShadow = '0 0 0 3px rgba(68, 50, 191, 0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#d6dadf';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                        </div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '16px',
                        padding: '16px',
                        background: '#ffffff'
                    }}>
                        {filteredIcons.map((icon) => {
                            // Show all 8 sizes
                            const sizesToShow = iconSizes;

                            return (
                                <div
                                    key={icon.name}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '12px',
                                        padding: '16px',
                                        border: '1px dashed #4432bf',
                                        borderRadius: '8px',
                                        background: '#ffffff'
                                    }}
                                >
                                    {/* Icon Name with Purple Diamond */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontFamily: "'Host Grotesk', sans-serif",
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: '#2f353b'
                                    }}>
                                        {/* Purple Diamond Icon */}
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 0L12 6L6 12L0 6L6 0Z" fill="#4432bf" />
                                        </svg>
                                        <span>{icon.label}</span>
                                    </div>

                                    {/* Icon Size Variants - Displayed in a row (largest to smallest) */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        flexWrap: 'nowrap',
                                        justifyContent: 'flex-start',
                                        overflowX: 'auto'
                                    }}>
                                        {sizesToShow.map((size) => (
                                            <div
                                                key={size}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: `${size}px`,
                                                    height: `${size}px`,
                                                    flexShrink: 0
                                                }}
                                            >
                                                <img
                                                    src={`/${icon.filePath}`}
                                                    alt={`${icon.label} ${size}px`}
                                                    style={{
                                                        width: `${size}px`,
                                                        height: `${size}px`,
                                                        objectFit: 'contain',
                                                        display: 'block'
                                                    }}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {filteredIcons.length === 0 && (
                        <div style={{
                            textAlign: 'center',
                            padding: '48px',
                            color: '#768494',
                            fontFamily: "'Host Grotesk', sans-serif"
                        }}>
                            No icons found matching "{iconSearchQuery}"
                        </div>
                    )}
                </div>
            </>
        );
    };


    const renderRadioComponent = () => {
        const radioStates = [
            { key: 'default', label: 'Default' },
            { key: 'hover', label: 'Hover' },
            { key: 'focus', label: 'Focus' },
            { key: 'pressed', label: 'Pressed' },
            { key: 'disabled', label: 'Disabled' },
        ];

        const radioSizes = [
            { key: 'small', label: 'Small' },
            { key: 'medium', label: 'Medium' },
            { key: 'large', label: 'Large' },
        ];

        return (
            <>
                {/* Radio Test Component */}
                <div className="component-section">
                    <RadioTest />
                </div>

                {/* Radio States - Unselected & Selected in Grid */}
                <div className="component-section">
                    <h2 className="component-section-title">Radio Component - All States</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '24px'
                    }}>
                        {/* Unselected States */}
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#2f353b' }}>Unselected</h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: `120px repeat(${radioSizes.length}, 1fr)`,
                                gap: '12px',
                                alignItems: 'center'
                            }}>
                                {/* Header row */}
                                <div></div>
                                {radioSizes.map((size) => (
                                    <div key={size.key} style={{ textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#768494' }}>
                                        {size.label}
                                    </div>
                                ))}
                                {/* State rows */}
                                {radioStates.map((state) => (
                                    <React.Fragment key={state.key}>
                                        <div style={{ fontSize: '14px', fontWeight: 500, color: '#2f353b' }}>
                                            {state.label}
                                        </div>
                                        {radioSizes.map((size) => (
                                            <div key={size.key} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px' }}>
                                                <Radio
                                                    checked={false}
                                                    disabled={state.key === 'disabled'}
                                                    state={state.key}
                                                    size={size.key}
                                                    name={`radio-${state.key}-${size.key}`}
                                                    value={`value-${size.key}`}
                                                    onChange={(e) => console.log('Radio changed:', e.target.value)}
                                                />
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Selected States */}
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#2f353b' }}>Selected</h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: `120px repeat(${radioSizes.length}, 1fr)`,
                                gap: '12px',
                                alignItems: 'center'
                            }}>
                                {/* Header row */}
                                <div></div>
                                {radioSizes.map((size) => (
                                    <div key={size.key} style={{ textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#768494' }}>
                                        {size.label}
                                    </div>
                                ))}
                                {/* State rows */}
                                {radioStates.map((state) => (
                                    <React.Fragment key={state.key}>
                                        <div style={{ fontSize: '14px', fontWeight: 500, color: '#2f353b' }}>
                                            {state.label}
                                        </div>
                                        {radioSizes.map((size) => (
                                            <div key={size.key} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px' }}>
                                                <Radio
                                                    checked={true}
                                                    disabled={state.key === 'disabled'}
                                                    state={state.key}
                                                    size={size.key}
                                                    name={`radio-selected-${state.key}-${size.key}`}
                                                    value={`value-${size.key}`}
                                                    onChange={(e) => console.log('Radio changed:', e.target.value)}
                                                />
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Radio with Labels */}
                <div className="component-section">
                    <h2 className="component-section-title">Radio Component - With Labels</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
                        <Radio
                            checked={false}
                            name="radio-group"
                            value="option1"
                            label="Option 1"
                            onChange={(e) => console.log('Radio changed:', e.target.value)}
                        />
                        <Radio
                            checked={true}
                            name="radio-group"
                            value="option2"
                            label="Option 2"
                            onChange={(e) => console.log('Radio changed:', e.target.value)}
                        />
                        <Radio
                            checked={false}
                            name="radio-group"
                            value="option3"
                            label="Option 3"
                            onChange={(e) => console.log('Radio changed:', e.target.value)}
                        />
                    </div>
                </div>
            </>
        );
    };

    const renderToggleComponent = () => {
        const toggleStates = [
            { key: 'default', label: 'Default' },
            { key: 'hover', label: 'Hover' },
            { key: 'focus', label: 'Focus' },
            { key: 'pressed', label: 'Pressed' },
            { key: 'disabled', label: 'Disabled' },
        ];

        const toggleSizes = [
            { key: 'small', label: 'Small' },
            { key: 'medium', label: 'Medium' },
            { key: 'large', label: 'Large' },
        ];

        return (
            <>
                {/* Toggle Test Component */}
                <div className="component-section">
                    <ToggleTest />
                </div>

                {/* Toggle States - OFF & ON in Grid */}
                <div className="component-section">
                    <h2 className="component-section-title">Toggle Component - All States</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '24px'
                    }}>
                        {/* OFF States */}
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#2f353b' }}>OFF</h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: `120px repeat(${toggleSizes.length}, 1fr)`,
                                gap: '12px',
                                alignItems: 'center'
                            }}>
                                {/* Header row */}
                                <div></div>
                                {toggleSizes.map((size) => (
                                    <div key={size.key} style={{ textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#768494' }}>
                                        {size.label}
                                    </div>
                                ))}
                                {/* State rows */}
                                {toggleStates.map((state) => (
                                    <React.Fragment key={state.key}>
                                        <div style={{ fontSize: '14px', fontWeight: 500, color: '#2f353b' }}>
                                            {state.label}
                                        </div>
                                        {toggleSizes.map((size) => (
                                            <div key={size.key} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px' }}>
                                                <Toggle
                                                    checked={false}
                                                    disabled={state.key === 'disabled'}
                                                    state={state.key}
                                                    size={size.key}
                                                    name={`toggle-off-${state.key}-${size.key}`}
                                                    value={`value-${size.key}`}
                                                    onChange={(e) => console.log('Toggle changed:', e.target.checked)}
                                                />
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* ON States */}
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#2f353b' }}>ON</h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: `120px repeat(${toggleSizes.length}, 1fr)`,
                                gap: '12px',
                                alignItems: 'center'
                            }}>
                                {/* Header row */}
                                <div></div>
                                {toggleSizes.map((size) => (
                                    <div key={size.key} style={{ textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#768494' }}>
                                        {size.label}
                                    </div>
                                ))}
                                {/* State rows */}
                                {toggleStates.map((state) => (
                                    <React.Fragment key={state.key}>
                                        <div style={{ fontSize: '14px', fontWeight: 500, color: '#2f353b' }}>
                                            {state.label}
                                        </div>
                                        {toggleSizes.map((size) => (
                                            <div key={size.key} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px' }}>
                                                <Toggle
                                                    checked={true}
                                                    disabled={state.key === 'disabled'}
                                                    state={state.key}
                                                    size={size.key}
                                                    name={`toggle-on-${state.key}-${size.key}`}
                                                    value={`value-${size.key}`}
                                                    onChange={(e) => console.log('Toggle changed:', e.target.checked)}
                                                />
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Toggle with Labels */}
                <div className="component-section">
                    <h2 className="component-section-title">Toggle Component - With Labels</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
                        <Toggle
                            checked={false}
                            label="Notifications"
                            onChange={(e) => console.log('Toggle changed:', e.target.checked)}
                        />
                        <Toggle
                            checked={true}
                            label="Email alerts"
                            onChange={(e) => console.log('Toggle changed:', e.target.checked)}
                        />
                        <Toggle
                            checked={false}
                            disabled={true}
                            label="Disabled toggle"
                            onChange={(e) => console.log('Should not fire')}
                        />
                        <Toggle
                            checked={true}
                            disabled={true}
                            label="Disabled checked toggle"
                            onChange={(e) => console.log('Should not fire')}
                        />
                    </div>
                </div>
            </>
        );
    };

    const renderTextAreaComponent = () => {
        return (
            <div className="component-section">
                <TextAreaTest />
            </div>
        );
    };

    const renderTableComponent = () => {
        return (
            <>
                {/* Table Test Component */}
                <div className="component-section">
                    <TableTest />
                </div>
            </>
        );
    };


    const renderPaginationComponent = () => {
        return (
            <>
                {/* Pagination Test Component */}
                <div className="component-section">
                    <PaginationTest />
                </div>
            </>
        );
    };



    const renderNotificationComponent = () => {
        return (
            <>
                {/* Notification Test Component */}
                <div className="component-section">
                    <NotificationTest />
                </div>
            </>
        );
    };

    const renderTabComponent = () => {
        return (
            <>
                {/* Tab Test Component */}
                <div className="component-section">
                    <TabTest />
                </div>
            </>
        );
    };

    const [componentSearchQuery, setComponentSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    // ... (existing constants)

    const filteredTabs = tabs.filter(tab =>
        tab.label.toLowerCase().includes(componentSearchQuery.toLowerCase())
    );

    return (
        <div className="component-library">
            <div className="component-header">
                <div className="component-header-left">
                    <div className="component-header-logo">
                        <img src="/logo/Logo.svg" alt="SquareX Logo" style={{ width: '24px', height: '24px' }} />
                        SquareX
                    </div>
                </div>
                <div className="component-header-search-wrapper">
                    <div className="component-header-search">
                        <Icon name="MagnifyingGlass" size={16} />
                        <input
                            type="text"
                            placeholder="Search components..."
                            value={componentSearchQuery}
                            onChange={(e) => setComponentSearchQuery(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                        />
                        <span className="component-header-search-shortcut">⌘K</span>
                    </div>
                    {componentSearchQuery && isSearchFocused && filteredTabs.length > 0 && (
                        <div className="component-header-search-results">
                            {filteredTabs.map(tab => (
                                <div
                                    key={tab.id}
                                    className="component-header-search-item"
                                    onClick={() => {
                                        setActiveTab(tab.id);
                                        setComponentSearchQuery('');
                                    }}
                                >
                                    {tab.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>

            <div className="component-library-content">
                <div className="component-sidebar">
                    <div className="component-sidebar-scroll">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`component-tab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="component-tab-content">
                    {activeTab === 'iconbutton' && renderIconButtonComponent()}
                    {activeTab === 'button' && renderButtonComponent()}
                    {activeTab === 'buttondanger' && renderButtonDangerComponent()}
                    {activeTab === 'inputfield' && <InputFieldTest />}
                    {activeTab === 'search' && renderSearchComponent()}
                    {activeTab === 'textarea' && renderTextAreaComponent()}
                    {activeTab === 'itemrow' && <ItemRowTest />}
                    {activeTab === 'categories' && <CategoriesTest />}
                    {activeTab === 'backgroundgradient' && renderBackgroundGradientComponent()}
                    {activeTab === 'icons' && renderIconsComponent()}
                    {activeTab === 'checkbox' && <CheckboxTest />}
                    {activeTab === 'radio' && renderRadioComponent()}
                    {activeTab === 'toggle' && renderToggleComponent()}
                    {activeTab === 'dropdown' && <DropdownTest />}
                    {activeTab === 'table' && renderTableComponent()}
                    {activeTab === 'cell' && <CellTest />}
                    {activeTab === 'chip' && <ChipTest />}
                    {activeTab === 'chips' && <ChipListTest />}
                    {activeTab === 'breadcrumb' && <BreadcrumbTest />}
                    {activeTab === 'avatar' && <AvatarTest />}
                    {activeTab === 'pagination' && renderPaginationComponent()}
                    {activeTab === 'badge' && <BadgeTest />}
                    {activeTab === 'notification' && renderNotificationComponent()}
                    {activeTab === 'tab' && renderTabComponent()}
                    {activeTab === 'chips' && renderChipComponent()}
                    {activeTab === 'statusindicator' && renderStatusIndicatorComponent()}
                    {activeTab === 'modal' && renderModalComponent()}
                    {activeTab === 'toast' && renderToastComponent()}
                    {activeTab === 'dropdownnested' && <DropdownNestedTest />}
                    {activeTab === 'glass' && <GlassDemo />}
                    {activeTab === 'glass-dark' && <GlassDarkDemo />}
                </div>
            </div>
        </div>
    );
};

export default ComponentLibrary;

