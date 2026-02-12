import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SellOutlinedIcon from '@mui/icons-material/SellOutlined'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'



function createData(testCase, input, output) {
  return { testCase, input, output }
}

const rows = [
  createData('Test case 1', 'x = 123', '321'),
  createData('Test case 2', 'x = -123', '-321'),
  createData('Test case 3', 'x = 120', '21')
]

function Description() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography sx={{ fontWeight: '500' }} variant='h5'>7. Reverse Integer</Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Chip sx={{ color: '#ffa703', fontWeight: '400', backgroundColor: 'rgba(251, 147, 21, 0.2)' }} label="Medium" />
        <Chip sx={{ px: 1 }} icon={<SellOutlinedIcon sx={{ fontSize: '1.25rem' }} />} label="Topic" />
      </Box>
      <Typography sx={{ color: '#363636' }}>Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.</Typography>
      <Typography variant='b1' sx={{ fontWeight: 'bold' }}>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</Typography>
      <TableContainer sx={{ boxShadow: '0 0 1px 1px rgba(0,0,0,0.2)' }} component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Test Case</TableCell>
              <TableCell align="left">Input</TableCell>
              <TableCell align="right">Output</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.testCase}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.testCase}
                </TableCell>
                <TableCell align="left">{row.input}</TableCell>
                <TableCell align="right">{row.output}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Accordion sx={{ boxShadow: '0 0 1px 1px rgba(0,0,0,0.2)', borderRadius: '4px' }} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontWeight: 'bold' }} component="span">Solutions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ boxShadow: '0 0 1px 1px rgba(0,0,0,0.2)', borderRadius: '4px' }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"

        >
          <Typography sx={{ fontWeight: 'bold' }} component="span">Similar Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Description