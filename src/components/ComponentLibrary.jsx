import React, { useState } from 'react';
import IconButton from './ui/IconButton/IconButton';
import Button from './ui/Button/Button';
import ButtonDanger from './ui/ButtonDanger/ButtonDanger';
import InputField from './ui/InputField/InputField';
import InputFieldTest from './ui/InputField/InputFieldTest';
import TextAreaTest from './ui/TextArea/TextAreaTest';
import Dropdown from './ui/Dropdown/Dropdown';
import DropdownTest from './ui/Dropdown/DropdownTest';
import SearchTest from './ui/Search/SearchTest';
import ChipTest from './ui/Chip/ChipTest';
import ChipListTest from './ui/ChipList/ChipListTest';
import StatusIndicatorTest from './ui/StatusIndicator/StatusIndicatorTest';
import BadgeTest from './ui/Badge/BadgeTest';
import NotificationTest from './ui/Notification/NotificationTest';
import TabTest from './ui/Tab/TabTest';
import ModalTest from './ui/Modal/ModalTest';
import ToastTest from './ui/Toast/ToastTest';
import ItemRowTest from './ui/ItemRow/ItemRowTest';
import ListOfItems from './ui/ListOfItems/ListOfItems';
import DropdownNestedColumn from './ui/DropdownNestedColumn/DropdownNestedColumn';
import DropdownNested from './ui/DropdownNested/DropdownNested';
import Categories from './ui/Categories/Categories';
import CategoriesTest from './ui/Categories/CategoriesTest';

import Checkbox from './ui/Checkbox/Checkbox';
import CheckboxTest from './ui/Checkbox/CheckboxTest';
import Radio from './ui/Radio/Radio';
import RadioTest from './ui/Radio/RadioTest';
import Toggle from './ui/Toggle/Toggle';
import ToggleTest from './ui/Toggle/ToggleTest';
import TableTest from './ui/Table/TableTest';
import PaginationTest from './ui/Pagination/PaginationTest';
import CellTest from './ui/Cell/CellTest';
import BreadcrumbTest from './ui/Breadcrumb/BreadcrumbTest';
import AvatarTest from './ui/Avatar/AvatarTest';
import { allIcons as iconListData } from '../data/iconList';
import './ComponentLibrary.css';

const ComponentLibrary = () => {
  const [activeTab, setActiveTab] = useState('iconbutton');
  const [iconSearchQuery, setIconSearchQuery] = useState('');
  const styles = ['primary', 'secondary', 'neutral', 'subtle'];
  const dangerStyles = ['primary', 'neutral', 'subtle'];
  const states = ['default', 'hover', 'focus', 'disabled', 'loading'];
  const sizes = ['medium', 'small'];

  const tabs = [
    { id: 'iconbutton', label: 'IconButton' },
    { id: 'button', label: 'Button' },
    { id: 'buttondanger', label: 'ButtonDanger' },
    { id: 'inputfield', label: 'InputField' },
    { id: 'search', label: 'Search' },
    { id: 'textarea', label: 'TextArea' },
    // { id: 'nestedsection', label: 'NestedSection' },
    { id: 'itemrow', label: 'ItemRow' },
    { id: 'categories', label: 'Categories' },
    { id: 'backgroundgradient', label: 'BackgroundGradient' },
    { id: 'icons', label: 'Icons' },
    { id: 'checkbox', label: 'Checkbox' },
    { id: 'radio', label: 'Radio' },
    { id: 'toggle', label: 'Toggle' },
    { id: 'dropdown', label: 'Dropdown' },
    { id: 'table', label: 'Table' },
    { id: 'pagination', label: 'Pagination' },
    { id: 'cell', label: 'Cell' },
    { id: 'breadcrumb', label: 'Breadcrumb' },
    { id: 'avatar', label: 'Avatar' },
    { id: 'badge', label: 'Badge' },
    { id: 'notification', label: 'Notification' },
    { id: 'tab', label: 'Tab' },
    { id: 'chips', label: 'Chips' },
    { id: 'statusindicator', label: 'StatusIndicator' },
    { id: 'modal', label: 'Modal' },
    { id: 'toast', label: 'Toast' },
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

  const renderInputFieldComponent = () => {
    const inputStates = [
      { key: 'default', label: 'Default' },
      { key: 'hover', label: 'Hover' },
      { key: 'focused', label: 'Focused' },
      { key: 'typing', label: 'Typing' },
      { key: 'filled', label: 'Filled' },
      { key: 'filledHover', label: 'Filled in - Hover' },
      { key: 'error', label: 'Error' },
      { key: 'disabled', label: 'Disabled' },
    ];

    return (
      <>
        {/* InputField Test Component */}
        <div className="component-section">
          <InputFieldTest />
        </div>


        {/* InputField Section */}
        <div className="component-section">
          <h2 className="component-section-title">InputField Component</h2>
          <div className="component-inputfield-container">
            <div className="component-inputfield-grid">
              <div className="component-inputfield-row">
                {inputStates.map((state) => (
                  <div
                    key={state.key}
                    className="component-inputfield-cell"
                  >
                    <div className="component-inputfield-state-label">{state.label}</div>
                    <InputField
                      label="Label"
                      description="Description"
                      value={state.key === 'default' || state.key === 'hover' || state.key === 'focused' ? '' : 'Value'}
                      placeholder="Value"
                      error="Error"
                      hasLabel={true}
                      hasDescription={true}
                      hasError={true}
                      hasChips={false}
                      showIcon={false}
                      state={state.key}
                      disabled={state.key === 'disabled'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderSearchComponent = () => {
    return (
      <>
        <div className="component-section">
          <SearchTest />
        </div>
      </>
    );
  };

  const renderItemRowComponent = () => {
    const listOfItemsTypes = [
      { key: 'default', label: 'Default (No Title)' },
      { key: 'variant2', label: 'Variant2 (With Title)' },
    ];

    return (
      <>
        <div className="component-section">
          <ItemRowTest />
        </div>

        <div className="component-section">
          <h2 className="component-section-title">ListOfItems Component</h2>
          <div className="component-inputfield-container">
            <div className="component-inputfield-grid">
              {listOfItemsTypes.map((type) => (
                <div key={type.key} className="component-inputfield-row">
                  <div className="component-inputfield-cell">
                    <div className="component-inputfield-state-label">{type.label}</div>
                    <ListOfItems
                      title="Category"
                      type={type.key}
                      withTitle={type.key === 'variant2'}
                      open={true}
                      items={[
                        { label: 'Item', id: '1', hasRadio: type.key === 'variant2' },
                        { label: 'Item', id: '2', hasRadio: type.key === 'variant2' },
                        { label: 'Item', id: '3', hasRadio: type.key === 'variant2' },
                        { label: 'Item', id: '4', hasRadio: type.key === 'variant2' },
                        { label: 'Item', id: '5', hasRadio: type.key === 'variant2' },
                      ]}
                      onItemClick={(item) => console.log('Item clicked:', item)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="component-section">
          <h2 className="component-section-title">DropdownNestedColumn Component</h2>
          <div className="component-inputfield-container">
            <div className="component-inputfield-grid">
              <div className="component-inputfield-row">
                <div className="component-inputfield-cell">
                  <div className="component-inputfield-state-label">Expanded</div>
                  <DropdownNestedColumn
                    title="Title"
                    expanded={true}
                    chips={[
                      { label: 'Label', id: '1' },
                      { label: 'Label', id: '2' },
                      { label: 'Label', id: '3' },
                      { label: 'Label', id: '4' },
                    ]}
                    items={[
                      { label: 'Item', id: '1', hasCheckbox: true, checked: false },
                      { label: 'Item', id: '2', hasCheckbox: true, checked: false },
                      { label: 'Item', id: '3', hasCheckbox: true, checked: false },
                      { label: 'Item', id: '4', hasCheckbox: true, checked: false },
                      { label: 'Item', id: '5', hasCheckbox: true, checked: false },
                    ]}
                    onClearAll={() => console.log('Clear all clicked')}
                    onChipRemove={(chip) => console.log('Chip removed:', chip)}
                    onItemClick={(item) => console.log('Item clicked:', item)}
                  />
                </div>
                <div className="component-inputfield-cell">
                  <div className="component-inputfield-state-label">Collapsed</div>
                  <DropdownNestedColumn
                    title="Title"
                    expanded={false}
                    chips={[
                      { label: 'Label', id: '1' },
                      { label: 'Label', id: '2' },
                      { label: 'Label', id: '3' },
                      { label: 'Label', id: '4' },
                    ]}
                    items={[
                      { label: 'Item', id: '1', hasCheckbox: true, checked: false },
                      { label: 'Item', id: '2', hasCheckbox: true, checked: false },
                      { label: 'Item', id: '3', hasCheckbox: true, checked: false },
                      { label: 'Item', id: '4', hasCheckbox: true, checked: false },
                      { label: 'Item', id: '5', hasCheckbox: true, checked: false },
                    ]}
                    onClearAll={() => console.log('Clear all clicked')}
                    onChipRemove={(chip) => console.log('Chip removed:', chip)}
                    onItemClick={(item) => console.log('Item clicked:', item)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="component-section">
          <h2 className="component-section-title">DropdownNested Component</h2>
          <div className="component-inputfield-container">
            <div className="component-inputfield-grid">
              <div className="component-inputfield-row">
                <div className="component-inputfield-cell">
                  <div className="component-inputfield-state-label">Default</div>
                  <DropdownNested
                    leftColumn={{
                      title: 'Select a Member',
                      chips: [
                        { label: 'Label', id: '1' },
                        { label: 'Label', id: '2' },
                        { label: 'Label', id: '3' },
                        { label: 'Label', id: '4' },
                      ],
                      items: [
                        { label: 'Item', id: '1', hasCheckbox: true, checked: false },
                        { label: 'Item', id: '2', hasCheckbox: true, checked: true },
                        { label: 'Item', id: '3', hasCheckbox: true, checked: true },
                        { label: 'Item', id: '4', hasCheckbox: true, checked: false },
                        { label: 'Item', id: '5', hasCheckbox: true, checked: false },
                      ],
                    }}
                    rightColumn={{
                      title: 'Select a Group',
                      chips: [
                        { label: 'Label', id: '1' },
                        { label: 'Label', id: '2' },
                        { label: 'Label', id: '3' },
                        { label: 'Label', id: '4' },
                      ],
                      items: [
                        { label: 'Item', id: '1', hasCheckbox: true, checked: true },
                        { label: 'Item', id: '2', hasCheckbox: true, checked: false },
                        { label: 'Item', id: '3', hasCheckbox: true, checked: true },
                        { label: 'Item', id: '4', hasCheckbox: true, checked: false },
                        { label: 'Item', id: '5', hasCheckbox: true, checked: false },
                      ],
                    }}
                    onLeftClearAll={() => console.log('Left clear all clicked')}
                    onRightClearAll={() => console.log('Right clear all clicked')}
                    onLeftChipRemove={(chip) => console.log('Left chip removed:', chip)}
                    onRightChipRemove={(chip) => console.log('Right chip removed:', chip)}
                    onLeftItemClick={(item) => console.log('Left item clicked:', item)}
                    onRightItemClick={(item) => console.log('Right item clicked:', item)}
                    onCancel={() => console.log('Cancel clicked')}
                    onApply={() => console.log('Apply clicked')}
                  />
                </div>
              </div>
            </div>
          </div>
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


  const FunctionalCategoriesWrapper = ({ initialCategories, variant = 'single' }) => {
    const [categories, setCategories] = React.useState(initialCategories);
    const [chips, setChips] = React.useState([]);

    const handleItemClick = (item, categoryIndex) => {
      const newCategories = categories.map((cat, idx) => {
        if (variant === 'single') {
          return {
            ...cat,
            items: cat.items.map(i => ({
              ...i,
              checked: i.id === item.id ? !i.checked : false,
              type: 'default'
            }))
          };
        } else {
          if (idx !== categoryIndex) return cat;
          return {
            ...cat,
            items: cat.items.map(i => {
              if (i.id !== item.id) return i;
              return { ...i, checked: !i.checked, type: 'default' };
            })
          };
        }
      });
      setCategories(newCategories);

      const newChips = newCategories
        .flatMap(cat => cat.items)
        .filter(i => i.checked)
        .map(i => ({ label: i.label, id: i.id }));
      setChips(newChips);
    };

    const handleChipRemove = (chip) => {
      const newCategories = categories.map(cat => ({
        ...cat,
        items: cat.items.map(item => {
          if (item.id === chip.id) {
            return { ...item, checked: false, type: 'default' };
          }
          return item;
        })
      }));
      setCategories(newCategories);
      setChips(chips.filter(c => c.id !== chip.id));
    };

    return (
      <Categories
        variant={variant}
        chips={chips}
        categories={categories}
        onChipRemove={handleChipRemove}
        onItemClick={handleItemClick}
        onCancel={() => console.log('Cancel clicked')}
        onApply={() => console.log('Apply clicked')}
      />
    );
  };

  const renderCategoriesComponent = () => {
    const sampleCategory = {
      title: 'Category',
      expanded: true,
      items: [
        { label: 'Item 1', id: '1' },
        { label: 'Item 2', id: '2' },
        { label: 'Item 3', id: '3' },
        { label: 'Item 4', id: '4' },
        { label: 'Item 5', id: '5' },
        { label: 'Item 6', id: '6' },
      ],
    };

    return (
      <>
        {/* Categories Test Component */}
        <div className="component-section">
          <CategoriesTest />
        </div>

        {/* Categories Component - Variant 1 (Categories=1) */}
        <div className="component-section">
          <h2 className="component-section-title">Categories Component - Variant 1 (Single Category List)</h2>
          <div className="component-inputfield-container" style={{ width: 'fit-content' }}>
            <div className="component-inputfield-grid">
              <div className="component-inputfield-row">
                <div className="component-inputfield-cell" style={{ minWidth: '357px', width: 'auto' }}>
                  <FunctionalCategoriesWrapper
                    variant="single"
                    initialCategories={[sampleCategory]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Component - Variant 2 (Categories=2) */}
        <div className="component-section">
          <h2 className="component-section-title">Categories Component - Variant 2 (Multiple Category Lists)</h2>
          <div className="component-inputfield-container" style={{ width: 'fit-content' }}>
            <div className="component-inputfield-grid">
              <div className="component-inputfield-row">
                <div className="component-inputfield-cell" style={{ minWidth: '357px', width: 'auto' }}>
                  <FunctionalCategoriesWrapper
                    variant="multiple"
                    initialCategories={[
                      { ...sampleCategory, title: 'Category 1', items: sampleCategory.items.map(i => ({ ...i, id: `c1-${i.id}` })) },
                      { ...sampleCategory, title: 'Category 2', items: sampleCategory.items.map(i => ({ ...i, id: `c2-${i.id}` })) }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Component - Variant 3 (Categories=3) */}
        <div className="component-section">
          <h2 className="component-section-title">Categories Component - Variant 3 (3 Category Lists)</h2>
          <div className="component-inputfield-container" style={{ width: 'fit-content' }}>
            <div className="component-inputfield-grid">
              <div className="component-inputfield-row">
                <div className="component-inputfield-cell" style={{ minWidth: '357px', width: 'auto' }}>
                  <FunctionalCategoriesWrapper
                    variant="multiple"
                    initialCategories={[
                      { ...sampleCategory, title: 'Category 1', items: sampleCategory.items.map(i => ({ ...i, id: `c1-${i.id}` })) },
                      { ...sampleCategory, title: 'Category 2', items: sampleCategory.items.map(i => ({ ...i, id: `c2-${i.id}` })) },
                      { ...sampleCategory, title: 'Category 3', items: sampleCategory.items.map(i => ({ ...i, id: `c3-${i.id}` })) }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Component - Variant 4 (Categories=4) */}
        <div className="component-section">
          <h2 className="component-section-title">Categories Component - Variant 4 (4 Category Lists)</h2>
          <div className="component-inputfield-container" style={{ width: 'fit-content' }}>
            <div className="component-inputfield-grid">
              <div className="component-inputfield-row">
                <div className="component-inputfield-cell" style={{ minWidth: '357px', width: 'auto' }}>
                  <FunctionalCategoriesWrapper
                    variant="multiple"
                    initialCategories={[
                      { ...sampleCategory, title: 'Category 1', items: sampleCategory.items.map(i => ({ ...i, id: `c1-${i.id}` })) },
                      { ...sampleCategory, title: 'Category 2', items: sampleCategory.items.map(i => ({ ...i, id: `c2-${i.id}` })) },
                      { ...sampleCategory, title: 'Category 3', items: sampleCategory.items.map(i => ({ ...i, id: `c3-${i.id}` })) },
                      { ...sampleCategory, title: 'Category 4', items: sampleCategory.items.map(i => ({ ...i, id: `c4-${i.id}` })) }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Component - Variant 5 (Categories=5) */}
        <div className="component-section">
          <h2 className="component-section-title">Categories Component - Variant 5 (5 Category Lists)</h2>
          <div className="component-inputfield-container" style={{ width: 'fit-content' }}>
            <div className="component-inputfield-grid">
              <div className="component-inputfield-row">
                <div className="component-inputfield-cell" style={{ minWidth: '357px', width: 'auto' }}>
                  <FunctionalCategoriesWrapper
                    variant="multiple"
                    initialCategories={[
                      { ...sampleCategory, title: 'Category 1', items: sampleCategory.items.map(i => ({ ...i, id: `c1-${i.id}` })) },
                      { ...sampleCategory, title: 'Category 2', items: sampleCategory.items.map(i => ({ ...i, id: `c2-${i.id}` })) },
                      { ...sampleCategory, title: 'Category 3', items: sampleCategory.items.map(i => ({ ...i, id: `c3-${i.id}` })) },
                      { ...sampleCategory, title: 'Category 4', items: sampleCategory.items.map(i => ({ ...i, id: `c4-${i.id}` })) },
                      { ...sampleCategory, title: 'Category 5', items: sampleCategory.items.map(i => ({ ...i, id: `c5-${i.id}` })) }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const BackgroundGradientWrapper = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const mode = isDarkMode ? 'Dark Mode BG' : 'Light Mode BG';

    return (
      <div className="component-section" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '24px 24px 0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="component-section-title" style={{ marginBottom: '24px', borderBottom: 'none' }}>BackgroundGradient Component</h2>
          <div style={{ marginBottom: '24px' }}>
            <Toggle
              checked={isDarkMode}
              onChange={(e) => setIsDarkMode(e.target.checked)}
              label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
              size="medium"
            />
          </div>
        </div>

        <div style={{ padding: '0 24px 24px 24px' }}>
          <div style={{
            width: '100%',
            height: '700px',
            position: 'relative',
            border: isDarkMode ? '1px solid #333' : '1px solid #e0e0e0',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'border-color 0.3s ease'
          }}>
            <BackgroundGradient mode={mode} />
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              padding: '4px 12px',
              background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
              borderRadius: '20px',
              fontSize: '12px',
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

  const renderCheckboxComponent = () => {
    const checkboxStates = [
      { key: 'default', label: 'Default' },
      { key: 'hover', label: 'Hover' },
      { key: 'focus', label: 'Focus' },
      { key: 'pressed', label: 'Pressed' },
      { key: 'disabled', label: 'Disabled' },
    ];

    const checkboxSizes = [
      { key: 'small', label: 'Small' },
      { key: 'medium', label: 'Medium' },
      { key: 'large', label: 'Large' },
    ];

    return (
      <>
        {/* Checkbox Test Component */}
        <div className="component-section">
          <CheckboxTest />
        </div>

        {/* Checkbox States - Unchecked & Checked in Grid */}
        <div className="component-section">
          <h2 className="component-section-title">Checkbox Component - All States</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px'
          }}>
            {/* Unchecked States */}
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#2f353b' }}>Unchecked</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: `120px repeat(${checkboxSizes.length}, 1fr)`,
                gap: '12px',
                alignItems: 'center'
              }}>
                {/* Header row */}
                <div></div>
                {checkboxSizes.map((size) => (
                  <div key={size.key} style={{ textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#768494' }}>
                    {size.label}
                  </div>
                ))}
                {/* State rows */}
                {checkboxStates.map((state) => (
                  <React.Fragment key={state.key}>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#2f353b' }}>
                      {state.label}
                    </div>
                    {checkboxSizes.map((size) => (
                      <div key={size.key} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px' }}>
                        <Checkbox
                          checked={false}
                          disabled={state.key === 'disabled'}
                          state={state.key}
                          size={size.key}
                          onChange={(e) => console.log('Checkbox changed:', e.target.checked)}
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Checked States */}
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#2f353b' }}>Checked</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: `120px repeat(${checkboxSizes.length}, 1fr)`,
                gap: '12px',
                alignItems: 'center'
              }}>
                {/* Header row */}
                <div></div>
                {checkboxSizes.map((size) => (
                  <div key={size.key} style={{ textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#768494' }}>
                    {size.label}
                  </div>
                ))}
                {/* State rows */}
                {checkboxStates.map((state) => (
                  <React.Fragment key={state.key}>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#2f353b' }}>
                      {state.label}
                    </div>
                    {checkboxSizes.map((size) => (
                      <div key={size.key} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px' }}>
                        <Checkbox
                          checked={true}
                          disabled={state.key === 'disabled'}
                          state={state.key}
                          size={size.key}
                          onChange={(e) => console.log('Checkbox changed:', e.target.checked)}
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox with Labels */}
        <div className="component-section">
          <h2 className="component-section-title">Checkbox Component - With Labels</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
            <Checkbox
              checked={false}
              label="Unchecked checkbox"
              onChange={(e) => console.log('Checkbox changed:', e.target.checked)}
            />
            <Checkbox
              checked={true}
              label="Checked checkbox"
              onChange={(e) => console.log('Checkbox changed:', e.target.checked)}
            />
            <Checkbox
              checked={false}
              disabled={true}
              label="Disabled checkbox"
              onChange={(e) => console.log('Checkbox changed:', e.target.checked)}
            />
            <Checkbox
              checked={true}
              disabled={true}
              label="Disabled checked checkbox"
              onChange={(e) => console.log('Checkbox changed:', e.target.checked)}
            />
          </div>
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

  const renderDropdownComponent = () => {
    return (
      <>
        {/* Dropdown Test Component */}
        <div className="component-section">
          <DropdownTest />
        </div>

        {/* Dropdown Section - Medium */}
        <div className="component-section">
          <h2 className="component-section-title">Dropdown Component - Medium</h2>
          <div className="component-inputfield-container">
            <div className="component-inputfield-grid">
              <div className="component-inputfield-row">
                {[
                  { key: 'default', label: 'Default' },
                  { key: 'hover', label: 'Hover' },
                  { key: 'selected', label: 'Selected' },
                  { key: 'focused', label: 'Focused' },
                  { key: 'error', label: 'Error' },
                  { key: 'disabled', label: 'Disabled' },
                ].map((state) => (
                  <div
                    key={state.key}
                    className="component-inputfield-cell"
                  >
                    <div className="component-inputfield-state-label">{state.label}</div>
                    <Dropdown
                      label="Label"
                      description="Description"
                      value={state.key === 'default' || state.key === 'hover' || state.key === 'focused' ? '' : 'Value'}
                      placeholder="Value"
                      error="Error"
                      hasLabel={true}
                      hasDescription={true}
                      hasError={state.key === 'error'}
                      hasChips={false}
                      type="medium"
                      state={state.key}
                      disabled={state.key === 'disabled'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Section - Small */}
        <div className="component-section">
          <h2 className="component-section-title">Dropdown Component - Small</h2>
          <div className="component-inputfield-container">
            <div className="component-inputfield-grid">
              <div className="component-inputfield-row">
                {[
                  { key: 'default', label: 'Default' },
                  { key: 'hover', label: 'Hover' },
                  { key: 'selected', label: 'Selected' },
                  { key: 'focused', label: 'Focused' },
                  { key: 'error', label: 'Error' },
                  { key: 'disabled', label: 'Disabled' },
                ].map((state) => (
                  <div
                    key={state.key}
                    className="component-inputfield-cell"
                  >
                    <div className="component-inputfield-state-label">{state.label}</div>
                    <Dropdown
                      label="Label"
                      description="Description"
                      value={state.key === 'default' || state.key === 'hover' || state.key === 'focused' ? '' : 'Value'}
                      placeholder="Value"
                      error="Error"
                      hasLabel={true}
                      hasDescription={true}
                      hasError={state.key === 'error'}
                      hasChips={false}
                      type="small"
                      state={state.key}
                      disabled={state.key === 'disabled'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
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

  const renderBadgeComponent = () => {
    return (
      <>
        {/* Badge Test Component */}
        <div className="component-section">
          <BadgeTest />
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

  return (
    <div className="component-library">
      <div className="component-library-content">
        <div className="component-sidebar">
          <div className="component-sidebar-header">
            <h1>Component Library</h1>
            <p>All Components - All Variants</p>
          </div>
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
          {activeTab === 'inputfield' && renderInputFieldComponent()}
          {activeTab === 'search' && renderSearchComponent()}
          {activeTab === 'textarea' && renderTextAreaComponent()}
          {activeTab === 'itemrow' && renderItemRowComponent()}
          {activeTab === 'categories' && renderCategoriesComponent()}
          {activeTab === 'backgroundgradient' && renderBackgroundGradientComponent()}
          {activeTab === 'icons' && renderIconsComponent()}
          {activeTab === 'checkbox' && renderCheckboxComponent()}
          {activeTab === 'radio' && renderRadioComponent()}
          {activeTab === 'toggle' && renderToggleComponent()}
          {activeTab === 'dropdown' && renderDropdownComponent()}
          {activeTab === 'table' && renderTableComponent()}
          {activeTab === 'cell' && <CellTest />}
          {activeTab === 'breadcrumb' && <BreadcrumbTest />}
          {activeTab === 'avatar' && <AvatarTest />}
          {activeTab === 'pagination' && renderPaginationComponent()}
          {activeTab === 'badge' && renderBadgeComponent()}
          {activeTab === 'notification' && renderNotificationComponent()}
          {activeTab === 'tab' && renderTabComponent()}
          {activeTab === 'chips' && renderChipComponent()}
          {activeTab === 'statusindicator' && renderStatusIndicatorComponent()}
          {activeTab === 'modal' && renderModalComponent()}
          {activeTab === 'toast' && renderToastComponent()}
        </div >
      </div >
    </div >
  );
};

export default ComponentLibrary;

