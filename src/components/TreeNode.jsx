import folderIcon from '../icons/folder.png'
import fileIcon from '../icons/file.png'

const TreeNode = ({ entries, depth = 0 }) => {
  return (
    <>
      {Object.entries(entries).map(([name, node]) => {
        const isFolder = node.type === 'folder';

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
            </div>

            {isFolder && (
              <TreeNode entries={node.children} depth={depth + 1} />
            )}
          </div>
        );
      })}
    </>
  )
}

export default TreeNode