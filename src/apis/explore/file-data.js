export const initialData = {
  items: {
    root: {
      index: 'root',
      isFolder: true,
      children: ['folder1', 'file1'], // Chứa ID của con
      data: 'Root',
    },
    folder1: {
      index: 'folder1',
      isFolder: true,
      children: ['file2'],
      data: 'Components',
      canMove: true,
      canRename: true,
    },
    file1: {
      index: 'file1',
      isFolder: false,
      children: [],
      data: 'App.js',
      canMove: true,
      canRename: true,
    },
    file2: {
      index: 'file2',
      isFolder: false,
      children: [],
      data: 'Header.css',
      canMove: true,
      canRename: true,
    },
  },
};