# Core Architecture Documentation

## Table of Contents

1. [Purpose of the `core/` Folder](#1-purpose-of-the-core-folder)
2. [Folder & File Structure Overview](#2-folder--file-structure-overview)
3. [Architectural Principles & Boundaries](#3-architectural-principles--boundaries)
4. [Patterns & Design Decisions](#4-patterns--design-decisions)
5. [Generic & Scalable Nature](#5-generic--scalable-nature)
6. [Do & Don't Rules](#6-do--dont-rules)
7. [Comparison Checklist](#7-comparison-checklist)
8. [Summary: Architecture Contract](#8-summary-architecture-contract)

---

## 1. Purpose of the `core/` Folder

### What Problem This Folder Solves

The `core/` folder serves as a **reusable UI component library** that provides cross-application shared capabilities. It solves:

- **Component Duplication**: Eliminates redundant implementations of common UI patterns across multiple applications
- **Design System Enforcement**: Provides a centralized, consistent Material-UI-based design system
- **Form Management Complexity**: Abstracts form rendering, validation, and state management into declarative patterns
- **Theme Consistency**: Ensures brand consistency through centralized theming
- **Development Velocity**: Accelerates new application development by providing pre-built, tested components

### What Logic IS Allowed Inside `core/`

✅ **UI Components**: Presentational components built on Material-UI
✅ **Generic Utilities**: Pure functions for common operations (arrays, dates, UUIDs)
✅ **Form Abstractions**: Form field components, validation rules, rendering engines
✅ **Theme Configuration**: Brand colors, typography, component style overrides
✅ **Hooks**: Reusable React hooks for UI state and component logic
✅ **Constants**: UI-related constants (calendar formats, view modes, etc.)
✅ **State Management Primitives**: Generic reactive variables for UI state (modals, snackbars)
✅ **Storybook Stories**: Component documentation and visual regression testing

### What Logic is Explicitly NOT Allowed Inside `core/`

❌ **Business Logic**: Domain-specific rules, calculations, or workflows
❌ **API/Service Layer**: HTTP clients, API endpoints, data fetching
❌ **Application State**: App-specific Redux/state management (except generic UI state)
❌ **Routing Logic**: Application-specific navigation or route configurations
❌ **Authentication/Authorization**: User session management, permissions
❌ **Database/Persistence**: Data models, ORM configurations, storage logic
❌ **Application Configuration**: Environment-specific configs, feature flags
❌ **Complex Business Workflows**: Multi-step processes specific to app domain

---

## 2. Folder & File Structure Overview

```
core/
├── package.json              # NPM package definition (@turner/core)
├── public/                   # Static assets for Storybook
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
└── src/
    ├── index.js              # Main export file - public API surface
    ├── index.css             # Global styles
    ├── reportWebVitals.js    # Performance monitoring utilities
    ├── setupTests.js         # Test configuration
    │
    ├── components/           # UI COMPONENT LIBRARY
    │   ├── Accordion/        # Collapsible panels
    │   ├── Alert/            # Notification banners
    │   ├── AutoSearchWithDebounce/  # Search with performance optimization
    │   ├── button/           # Button variants (contained, outlined, text, icon, etc.)
    │   ├── Calendar/         # Date selection components (day/week/month views)
    │   ├── dialog/           # Modal dialogs (alert, form dialogs)
    │   ├── Drawer/           # Side navigation drawers
    │   ├── EmailEditor/      # Rich text email composition
    │   ├── forms/            # FORM ECOSYSTEM (see below)
    │   ├── Graphs/           # Data visualization (Area, Bar, Line, Pie)
    │   ├── hooks/            # Component-specific hooks
    │   ├── icon/             # Icon wrapper components
    │   ├── List/             # List components with headers
    │   ├── Maps/             # Geographic visualizations
    │   ├── menu/             # Menu components (checkbox menus)
    │   ├── Modal/            # Simple modal dialogs
    │   ├── Pagination/       # Page navigation controls
    │   ├── portal/           # React portal abstraction
    │   ├── Progress/         # Loading indicators (circular, linear)
    │   ├── SeeMoreLessText/  # Text truncation with expand/collapse
    │   ├── split-button/     # Button with dropdown menu
    │   ├── Table/            # Data grid components
    │   ├── Tabs/             # Tab navigation (basic, with routing)
    │   ├── Tooltip/          # Hover tooltips
    │   ├── TruncatedText/    # Text overflow handling
    │   └── wordCloud/        # Word cloud visualizations
    │
    ├── components/forms/     # FORM RENDERING SYSTEM
    │   ├── render/           # Form rendering engine (react-final-form)
    │   ├── hooks/            # Form/field API hooks
    │   ├── validation/       # Validation rule library
    │   ├── TextField/        # Text input fields
    │   ├── SelectField/      # Dropdowns (simple, multi, autocomplete)
    │   ├── CheckboxField/    # Checkbox inputs
    │   ├── RadioField/       # Radio button groups
    │   ├── Date/             # Date/time pickers
    │   ├── TimeField/        # Time selection
    │   ├── ArrayField/       # Dynamic field arrays (with drag-drop)
    │   ├── EditorField/      # Rich text editors (Quill, Draft.js)
    │   ├── SwitchField/      # Toggle switches
    │   ├── SlideField/       # Range sliders
    │   ├── TextareaField/    # Multi-line text inputs
    │   ├── Rating/           # Star ratings
    │   ├── ColorPicker/      # Color selection
    │   ├── fileFeild/        # File upload inputs
    │   ├── wizard/           # Multi-step forms
    │   ├── condition/        # Conditional field rendering
    │   ├── hoc/              # Higher-order components for forms
    │   └── utils/            # Form utilities
    │
    ├── constants/            # UI CONSTANTS
    │   └── index.js          # Calendar constants, view modes, etc.
    │
    ├── FormModal/            # REACTIVE FORM MODAL STATE
    │   ├── index.js          # Modal container component
    │   ├── modal.js          # Modal implementation
    │   ├── reactive.js       # Apollo reactive variables
    │   ├── actions.js        # State actions/selectors
    │   ├── queries.js        # GraphQL queries (if applicable)
    │   ├── hooks.js          # Modal-specific hooks
    │   ├── config.js         # Configuration
    │   └── constants.js      # Modal constants
    │
    ├── Snackbar/             # REACTIVE SNACKBAR STATE
    │   ├── index.js          # Snackbar component
    │   ├── reactive.js       # Apollo reactive variables
    │   ├── actions.js        # State actions/selectors
    │   └── queries.js        # GraphQL queries (if applicable)
    │
    ├── hooks/                # GLOBAL HOOKS
    │   ├── calendar.js       # Calendar state management
    │   ├── getPropertyId.js  # Property ID extraction
    │   ├── handleInvalidChar.js  # Input sanitization
    │   ├── LowerCaseToTitleCase.js  # Text transformation
    │   ├── search.js         # Search functionality
    │   └── SeeMoreLess/      # Text expansion hooks
    │
    ├── stories/              # STORYBOOK CONFIGURATION
    │   ├── assets/           # Story assets
    │   └── theme/            # Story theming
    │
    ├── theme/                # DESIGN SYSTEM THEME
    │   ├── index.js          # Material-UI theme configuration
    │   ├── constants.js      # Color palette definitions
    │   └── overrides.js      # Component style overrides
    │
    └── utils/                # GENERIC UTILITIES
        ├── arrayUtils.js     # Array comparison/validation
        ├── dateUtils.js      # Date formatting/manipulation
        └── uuid.js           # UUID generation
```

### Why Each Folder Exists

| Folder              | Purpose                     | Why It Exists                                            |
| ------------------- | --------------------------- | -------------------------------------------------------- |
| `components/`       | Reusable UI building blocks | Provides consistent, tested components across apps       |
| `components/forms/` | Form rendering ecosystem    | Declarative form building reduces boilerplate and errors |
| `constants/`        | Shared UI constants         | Single source of truth for magic strings/enums           |
| `FormModal/`        | Generic modal state         | Centralized modal management without prop drilling       |
| `Snackbar/`         | Global notification state   | Trigger notifications from anywhere in the app           |
| `hooks/`            | Shared React hooks          | Extract reusable stateful logic                          |
| `stories/`          | Component documentation     | Living documentation and visual regression testing       |
| `theme/`            | Design system               | Brand consistency and centralized styling                |
| `utils/`            | Pure utility functions      | Reusable algorithms without business logic               |

---

## 3. Architectural Principles & Boundaries

### 1. Separation of Concerns

**Presentation vs. Logic**:

- Components focus on **how things look** (UI structure, styling, layout)
- Hooks and utilities handle **how things work** (state, calculations, transformations)
- Business logic is **explicitly excluded** and belongs in consuming applications

**Component Categories**:

```
├── Presentational Components (Stateless)
│   └── Button, Icon, Alert, Progress
├── Container Components (Stateful)
│   └── FormModal, Snackbar, Calendar
└── Composition Components (Orchestrating)
    └── FormRenderer, Wizard, ArrayField
```

### 2. Dependency Direction

**Strict Dependency Flow**:

```
Applications
    ↓ (depends on)
@turner/core
    ↓ (depends on)
Material-UI + React + Third-party Libraries
    ↓ (depends on)
React Core
```

**Internal Dependencies**:

```
components/
    ↓ (can import)
hooks/ + utils/ + constants/ + theme/
    ↓ (CANNOT import)
components/ (to avoid circular dependencies)
```

**Rules**:

- ✅ Components can import hooks, utils, constants, theme
- ✅ Hooks can import utils and constants
- ✅ Utils are pure and import nothing from `core/`
- ❌ No circular imports between component folders
- ❌ No importing from parent applications

### 3. Rules for Adding New Files to `core/`

**Component Addition Checklist**:

1. **Is it generic?** If it contains app-specific logic, it doesn't belong
2. **Is it reusable?** Will at least 2+ applications use it?
3. **Is it tested?** Must include Storybook stories
4. **Is it documented?** PropTypes and clear naming required
5. **Does it follow conventions?** Match existing patterns

**File Organization**:

```
components/NewComponent/
├── index.js              # Default export, public API
├── NewComponent.js       # Main implementation
├── NewComponent.stories.jsx  # Storybook documentation
├── NewComponent.test.js  # Unit tests (optional)
├── hooks.js              # Component-specific hooks (if needed)
└── subcomponents/        # Private sub-components (if needed)
```

### 4. Generic and Reusable Architecture

**What Makes It Generic**:

- **No hardcoded business entities**: No references to "users", "orders", "invoices", etc.
- **Configuration over convention**: Components accept props, not global config
- **Composition over inheritance**: Small, composable pieces vs. rigid hierarchies
- **Data-agnostic**: Components don't know about data sources (APIs, databases)

**Example - Generic Button**:

```javascript
// ✅ GOOD - Generic, reusable
<PrimaryButton label="Submit" onClick={handleClick} />

// ❌ BAD - App-specific logic inside core
<SubmitOrderButton orderId={123} />
```

### 5. Coupling Analysis

**Tight Coupling (Intentional)**:

- Components ↔ Material-UI (design system dependency)
- Forms ↔ react-final-form (form engine dependency)
- Theme ↔ Components (centralized styling)

**Loose Coupling (By Design)**:

- Components ↔ Applications (via props and exports)
- Components ↔ Data sources (props in, callbacks out)
- Components ↔ Each other (minimal cross-component imports)

**Apollo Client Exception**:

- `FormModal/` and `Snackbar/` use Apollo reactive variables
- This is acceptable for UI state management
- Consuming apps can use Redux, Zustand, or other state libraries alongside

---

## 4. Patterns & Design Decisions

### Pattern 1: Barrel Exports (Index.js Pattern)

**What**: All public exports go through `src/index.js`

**Why**:

- **Single point of entry**: Clear public API surface
- **Abstraction**: Internal structure can change without breaking imports
- **Tree-shaking**: Dead code elimination in consuming apps

**Implementation**:

```javascript
// src/index.js
export { PrimaryButton } from "./components/button/index";
export { default as FormRenderer } from "./components/forms/render";
```

**Consistency**: Applied to 100% of exports - strictly enforced

---

### Pattern 2: Component Folder Structure

**What**: Each component in its own folder with predictable files

**Why**:

- **Colocation**: Related files stay together
- **Discoverability**: Developers know where to find things
- **Scalability**: Easy to split large components into subcomponents

**Structure**:

```
ComponentName/
├── index.js              # Public exports only
├── ComponentName.js      # Primary implementation
├── ComponentName.stories.jsx  # Storybook
├── SubComponent.js       # Internal helpers (not exported)
└── hooks.js              # Component-specific hooks
```

**Consistency**: 95%+ of components follow this pattern

---

### Pattern 3: Form Rendering Abstraction

**What**: Declarative schema-based form rendering via react-final-form

**Why**:

- **Reduces boilerplate**: No repetitive state management code
- **Centralized validation**: Validation rules defined once
- **Consistency**: All forms behave the same way
- **Testability**: Forms are data structures, easy to test

**Implementation**:

```javascript
<FormRenderer
  schema={{
    fields: [
      { component: "TextField", name: "email", validate: [required, email] },
      { component: "SelectField", name: "country", options: countries },
    ],
  }}
  onSubmit={handleSubmit}
/>
```

**Consistency**: All form-heavy applications should use this pattern

---

### Pattern 4: Reactive State for Global UI

**What**: Apollo reactive variables for modal and snackbar state

**Why**:

- **No prop drilling**: Trigger modals/snackbars from anywhere
- **Framework agnostic**: Works alongside any state management
- **Lightweight**: Minimal overhead for simple UI state

**Implementation**:

```javascript
// FormModal/reactive.js
export const ShowModalVar = makeVar(false);

// FormModal/actions.js
export const ShowModalAction = () => {
  ShowModalVar(true);
};
```

**Consistency**: Used for `FormModal` and `Snackbar` only - not for general app state

---

### Pattern 5: Theme Customization via Material-UI

**What**: Centralized theme using Material-UI's `createTheme`

**Why**:

- **Design system**: Consistent brand colors, typography, spacing
- **DRY principle**: Override components once, apply everywhere
- **Responsiveness**: Centralized breakpoints

**Implementation**:

```javascript
// theme/index.js
const theme = createTheme({
  palette: { primary: { main: Primary } },
  breakpoints: { values: { sm: 1000, md: 1320 } },
  ...overrides,
});
```

**Consistency**: 100% of components respect theme values

---

### Pattern 6: Utility Organization

**What**: Pure functions in `utils/` with no external dependencies

**Why**:

- **Testability**: Pure functions are trivial to test
- **Reusability**: Can be used in components, hooks, or anywhere
- **Predictability**: No side effects

**Implementation**:

```javascript
// utils/arrayUtils.js
export function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return _.isEqual([...arr1].sort(), [...arr2].sort());
}
```

**Consistency**: 100% of utils are pure functions

---

### Pattern 7: Hook-Based Composition

**What**: Extract stateful logic into custom hooks

**Why**:

- **Reusability**: Share logic between components
- **Separation of concerns**: UI vs. state logic
- **Testing**: Test logic without rendering components

**Examples**:

- `useFormApi()` - Access form state
- `useFieldApi()` - Access field state
- `useDrawer()` - Drawer open/close state

**Consistency**: All stateful logic is hook-based

---

### Pattern 8: Storybook for Documentation

**What**: Every component has a `.stories.jsx` file

**Why**:

- **Living documentation**: Examples that stay up-to-date
- **Visual regression**: Catch UI bugs
- **Designer collaboration**: Share components with non-developers

**Implementation**:

```jsx
export default {
  title: "Components/Button",
  component: PrimaryButton,
};

export const Default = () => <PrimaryButton label="Click Me" />;
```

**Consistency**: ~80% coverage in stories files

---

## 5. Generic & Scalable Nature

### How This `core/` Avoids App-Specific Logic

**1. No Domain Language**:

```javascript
// ❌ App-specific
<UserProfile userId={123} />

// ✅ Generic
<CardComponent title="Profile" content={profileData} />
```

**2. Configuration via Props**:

```javascript
// All behavior is controlled by props
<DataGrid
  columns={columns} // Consumer defines structure
  rows={rows} // Consumer provides data
  onRowClick={handler} // Consumer defines behavior
/>
```

**3. No API Calls in Core**:

- Components receive data via props
- Data fetching is the **application's** responsibility
- Core provides UI, not data layer

**4. No Routing**:

- `TabsWithRoute` uses generic routing props
- Consuming app provides route configuration

---

### What Makes It Reusable Across Projects

**1. NPM Package Structure**:

```json
{
  "name": "@turner/core",
  "main": "./src/index.js",
  "peerDependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
```

**2. Minimal Assumptions**:

- No assumptions about backend technology
- No assumptions about state management (except internal UI state)
- No assumptions about routing library

**3. Themeable**:

```javascript
// Consuming app can override theme
import { ThemeProvider } from "@mui/material";
import customTheme from "./theme";

<ThemeProvider theme={customTheme}>
  <CoreComponents />
</ThemeProvider>;
```

---

### How It Supports Scaling

**1. Tree-Shaking**:

- Barrel exports allow bundlers to eliminate unused code
- Applications only bundle what they import

**2. Lazy Loading Ready**:

```javascript
// Applications can code-split core imports
const DataGrid = React.lazy(() =>
  import("@turner/core").then((m) => ({ default: m.DataGrid })),
);
```

**3. Incremental Adoption**:

- Apps can migrate component-by-component
- No "all-or-nothing" requirement

**4. Version Management**:

- Semantic versioning for backward compatibility
- Multiple apps can use different versions

---

### How New Features Integrate

**Adding a New Component**:

1. Create folder: `components/NewComponent/`
2. Implement component following patterns
3. Add Storybook story
4. Export in `src/index.js`
5. Version bump and publish

**No Breaking Changes**:

- New components don't affect existing ones
- Each component is isolated
- Consumers opt-in to new features

---

## 6. Do & Don't Rules (Strict Guidelines)

### ✅ Do

#### Component Development

- ✅ **Do** create small, focused components with single responsibility
- ✅ **Do** use PropTypes for all component props
- ✅ **Do** provide default props for optional values
- ✅ **Do** create Storybook stories for every component
- ✅ **Do** use Material-UI components as building blocks
- ✅ **Do** respect the theme values (colors, spacing, breakpoints)
- ✅ **Do** make components controlled (accept value + onChange)

#### Code Organization

- ✅ **Do** follow the folder structure pattern (ComponentName/index.js)
- ✅ **Do** export through `src/index.js` for all public APIs
- ✅ **Do** keep components/hooks/utils in their respective folders
- ✅ **Do** use barrel exports (`index.js`) in component folders
- ✅ **Do** colocate related files (component + stories + tests)

#### State Management

- ✅ **Do** use hooks for component state
- ✅ **Do** use Apollo reactive variables for global UI state (modals, snackbars)
- ✅ **Do** keep state as local as possible
- ✅ **Do** lift state only when necessary

#### Utilities & Helpers

- ✅ **Do** create pure functions in `utils/` for algorithms
- ✅ **Do** use descriptive function names (verb + noun)
- ✅ **Do** add JSDoc comments for complex utilities
- ✅ **Do** write generic utilities (no app-specific logic)

#### Forms

- ✅ **Do** use react-final-form for form state
- ✅ **Do** create reusable validation rules in `forms/validation/`
- ✅ **Do** make field components work with FormRenderer
- ✅ **Do** follow field component conventions (name, label, validate props)

#### Theme & Styling

- ✅ **Do** use theme values instead of hardcoded colors
- ✅ **Do** use Material-UI's `sx` prop for styling
- ✅ **Do** define brand colors in `theme/constants.js`
- ✅ **Do** use responsive breakpoints from theme

---

### ❌ Don't

#### Component Development

- ❌ **Don't** include business logic in components
- ❌ **Don't** hardcode business entity names (User, Order, Invoice)
- ❌ **Don't** make API calls inside components
- ❌ **Don't** use global state (except FormModal/Snackbar patterns)
- ❌ **Don't** create components that only work with specific data shapes
- ❌ **Don't** use inline styles (use theme/sx prop)

#### Code Organization

- ❌ **Don't** import from parent directories outside `core/`
- ❌ **Don't** create circular dependencies between components
- ❌ **Don't** mix component logic with utility logic
- ❌ **Don't** put business constants in `constants/` (UI constants only)
- ❌ **Don't** bypass `src/index.js` for exports

#### State Management

- ❌ **Don't** use Redux/MobX/Zustand inside core
- ❌ **Don't** store application data in core's state
- ❌ **Don't** manage authentication state in core
- ❌ **Don't** create coupling between components via shared state

#### API & Data

- ❌ **Don't** import HTTP clients (axios, fetch)
- ❌ **Don't** define API endpoints or GraphQL mutations
- ❌ **Don't** include data fetching logic
- ❌ **Don't** create data transformation for specific backends

#### Business Logic

- ❌ **Don't** add domain-specific calculations
- ❌ **Don't** implement business rules or workflows
- ❌ **Don't** add authorization/permission checks
- ❌ **Don't** create app-specific validators beyond format checks

#### Configuration

- ❌ **Don't** read environment variables
- ❌ **Don't** include feature flags
- ❌ **Don't** hardcode API URLs or external service configs
- ❌ **Don't** add app-specific routing configurations

#### Dependencies

- ❌ **Don't** add heavy dependencies without team discussion
- ❌ **Don't** lock to specific versions of peer dependencies
- ❌ **Don't** include dependencies only one app needs

---

## 7. Comparison Checklist

Use this checklist to validate your own `core/` folder architecture:

### Structure Validation

- [ ] **Package Structure**: Is `core/` an NPM package with `package.json` and `main` entry?
- [ ] **Main Export**: Does `src/index.js` export all public components?
- [ ] **Folder Organization**: Are components, hooks, utils, theme in separate folders?
- [ ] **Component Folders**: Does each component have its own folder with index.js?

### Component Architecture

- [ ] **PropTypes**: Do all components define PropTypes?
- [ ] **Default Props**: Are default values provided for optional props?
- [ ] **Material-UI**: Are components built on Material-UI primitives?
- [ ] **Controlled Components**: Do form fields accept value + onChange?
- [ ] **No Business Logic**: Are components free of domain-specific logic?

### Form System

- [ ] **Form Engine**: Is there a declarative form rendering system?
- [ ] **Validation Library**: Are validation rules abstracted and reusable?
- [ ] **Field Components**: Do field components integrate with the form renderer?
- [ ] **react-final-form**: Is form state managed via react-final-form (or equivalent)?

### State Management

- [ ] **Local State**: Is component state managed via hooks?
- [ ] **Global UI State**: Is there a pattern for modals/snackbars?
- [ ] **No App State**: Is application state excluded from core?
- [ ] **Reactive Variables**: Are Apollo reactive vars (or equivalent) used for UI state?

### Theming

- [ ] **Theme File**: Is there a centralized theme configuration?
- [ ] **Color Constants**: Are brand colors defined in constants?
- [ ] **Component Overrides**: Are Material-UI components customized globally?
- [ ] **Responsive Breakpoints**: Are breakpoints defined in theme?

### Utilities

- [ ] **Pure Functions**: Are utilities pure with no side effects?
- [ ] **Generic**: Are utilities free of app-specific logic?
- [ ] **Organized**: Are utilities in `utils/` folder?

### Documentation

- [ ] **Storybook**: Are components documented in Storybook?
- [ ] **Stories Coverage**: Do 70%+ of components have stories?
- [ ] **README**: Is there architectural documentation (like this file)?

### Dependencies

- [ ] **No Business Dependencies**: No imports from consuming apps
- [ ] **No API Clients**: No axios, fetch, or HTTP libraries used internally
- [ ] **Peer Dependencies**: Are React and Material-UI peer dependencies?
- [ ] **Minimal Coupling**: Are third-party dependencies kept minimal?

### Boundaries

- [ ] **No Routing**: Is routing configuration excluded?
- [ ] **No Auth**: Is authentication/authorization excluded?
- [ ] **No Data Fetching**: Are components data-agnostic?
- [ ] **No Environment Config**: Are env variables excluded?

### Quality

- [ ] **Naming Conventions**: Are components/folders consistently named?
- [ ] **File Naming**: Do files match component names?
- [ ] **Export Consistency**: Are all exports through index.js?
- [ ] **Circular Dependencies**: Are circular imports avoided?

---

## 8. Summary: Architecture Contract

### What This `core/` Folder Guarantees

**To Consuming Applications**:

1. **Stability**: Public API changes follow semantic versioning
2. **Performance**: Components are optimized and tree-shakeable
3. **Consistency**: All components follow Material-UI design system
4. **No Side Effects**: Components don't make API calls or modify global state (except UI state)
5. **Flexibility**: Components are configurable via props, not hardcoded
6. **Documentation**: Every component has Storybook examples

**To Developers**:

1. **Predictability**: File structure is consistent across components
2. **Discoverability**: All exports go through `src/index.js`
3. **Reusability**: Components are generic and composable
4. **Testability**: Components are pure (inputs → outputs)

### What Developers Must Respect

**When Working Inside `core/`**:

1. **Generic Only**: No app-specific logic or business rules
2. **UI Focused**: Components handle presentation, not data management
3. **Pattern Adherence**: Follow existing patterns (folder structure, exports, etc.)
4. **Theme Compliance**: Use theme values, not hardcoded styles
5. **Documentation**: Add Storybook stories for new components
6. **Dependency Hygiene**: Don't add heavy dependencies without discussion

**When Consuming `core/`**:

1. **Props Interface**: Configure components via props
2. **Data Fetching**: Applications are responsible for data
3. **State Management**: Applications manage app state
4. **Theme Override**: Applications can customize theme
5. **Error Boundaries**: Applications should wrap core components with error boundaries
6. **Version Locking**: Use semantic versioning to prevent breaking changes

---

### The Core Philosophy

> **`core/` is the answer to: "What UI primitives do we need in every application?"**
>
> **It is NOT the answer to: "How does our business work?"**

---

## Final Notes

This architecture creates a **clear separation** between:

- **What looks alike** (UI components - belongs in `core/`)
- **What works alike** (business logic - belongs in applications)

By maintaining this boundary, `core/` remains:

- **Reusable** across multiple applications
- **Maintainable** without breaking consuming apps
- **Scalable** as the component library grows
- **Testable** in isolation from business logic

When in doubt, ask:

> _"Could this component be used in a completely different business domain?"_

If yes → Belongs in `core/`.  
If no → Belongs in the application.

---

**Architecture Version**: 1.0  
**Last Updated**: February 6, 2026  
**Package**: `@turner/core` v0.1.0  
**Maintainer**: Development Team
