import { ButtonBase, withStyles } from '@material-ui/core';
export const Button = withStyles({
  root: {
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.16)',
    background: '#0F4F94',
    color: 'white',
    borderRadius: '8px',
    padding: '5px 5px',
    '&:hover': {
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)',
    },
  },
})(ButtonBase);

export const IconButton = withStyles({
  root: {
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.16)',
    background: '#0F4F94',
    color: 'white',
    borderRadius: '8px',
    padding: '5px 5px',
    '&:hover': {
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)',
    },
  },
})(ButtonBase);
