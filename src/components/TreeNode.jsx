import folderIcon from '../icons/folder.png'
import fileIcon from '../icons/file.png'

const TreeNode = ({ name, node, depth }) => {

  const isFolder = node.type === 'folder';

  function renderChildren() {
    if (!isFolder) return null;

    return (
      <div>
        {Object.entries(node.children).map(([childName, childNode]) => (
          <TreeNode key={childName} name={childName} node={childNode} depth={depth + 1} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div
        className={`tree-node ${isFolder ? 'folder' : 'file'}`}
        style={{ marginLeft: `${depth * 20}px` }}
      >
        <img src={isFolder ? folderIcon : fileIcon}
             alt={isFolder ? 'Folder' : 'File'} />
        {name}
      </div>
      {renderChildren()}
    </>
  )
}

export default TreeNode