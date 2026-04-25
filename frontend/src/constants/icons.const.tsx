import {
  MdArrowBack,
  MdArrowForward,
  MdUploadFile,
  MdClose,
  MdSettings,
  MdLanguage,
  MdEdit,
  MdDeleteForever,
  MdHome,
  MdAdd,
  MdLink,
  MdDelete,
  MdPublic,
  MdSearch,
  MdOpenInNew,
  MdContentCopy,
  MdExpandMore
} from 'react-icons/md'

// Back arrow icon (used in multiple views for navigation)
export const BackArrowIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdArrowBack size={size} color={color} />
)

// Upload icon (circle with cross)
export const UploadIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdUploadFile size={size} color={color} />
)

// Close/X icon
export const CloseIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdClose size={size} color={color} />
)

// Config/Settings icon
export const ConfigIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdSettings size={size} color={color} />
)

// Arrow icon (for LinkCard)
export const ArrowIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdArrowForward size={size} color={color} />
)

// Fallback website icon
export const WebsiteIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdLanguage size={size} color={color} />
)

// Home icon (for bottom nav)
export const HomeIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdHome size={size} color={color} />
)

// Add/Plus icon (for bottom nav)
export const AddIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdAdd size={size} color={color} />
)

// Edit icon (pencil-like)
export const EditIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdEdit size={size} color={color} />
)

// Delete icon (trash can)
export const DeleteIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdDeleteForever size={size} color={color} />
)

// Link icon
export const LinkIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdLink size={size} color={color} />
)

// Trash icon (simpler delete icon)
export const TrashIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdDelete size={size} color={color} />
)

// Globe icon
export const GlobeIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdPublic size={size} color={color} />
)

// Search icon
export const SearchIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdSearch size={size} color={color} />
)

// External link icon
export const ExternalLinkIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdOpenInNew size={size} color={color} />
)

// Copy icon
export const CopyIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <MdContentCopy size={size} color={color} />
)

// Chevron down icon
export const ChevronDownIcon: React.FC<{ size?: number; color?: string; style?: any }> = ({ size = 24, color = 'currentColor', style }) => (
  <MdExpandMore size={size} color={color} style={style} />
)