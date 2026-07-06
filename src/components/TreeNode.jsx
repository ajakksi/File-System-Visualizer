import folderIcon from '../icons/folder.png'
import fileIcon from '../icons/file.png'

const TreeNode = ({ entries, depth = 0 }) => {
   const safeEntries = entries ?? {};
  return (
    <>
      {Object.entries(safeEntries).map(([name, node]) => {
        const isFolder = node.type === 'folder';
        const isEmpty = isFolder && (!node.children || Object.keys(node.children).length === 0);

        return (
          <div key={name}>
            <div
              className={`tree-node ${isFolder ? 'folder' : 'file'}`}
              style={{ marginLeft: `${depth * 20}px` }}
            >
              <img
                src={isFolder ? folderIcon : fileIcon}
                alt={isFolder ? 'Folder' : 'File'}
              />
              {name}
              {isFolder && isEmpty && (<span className="empty-folder-hint"> (empty)</span>)}
            </div>

            {isFolder && node.children &&(
              <TreeNode entries={node.children} depth={depth + 1} />
            )}
          </div>
        );
      })}
    </>
  )
}

export default TreeNode