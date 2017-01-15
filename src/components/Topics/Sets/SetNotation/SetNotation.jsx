import React from 'react'
import { Tex as T, TexMarkup } from 'MathJax'

const SetNotation = () => (
	<div className='MathMarkup'>
		<h1>Set Notation</h1>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Symbol</th>
					<th>Meaning</th>
					<th>Example</th>
				</tr>		
			</thead>
			<tbody>
				<tr>
					<td>Set</td>
					<td><T t='\{\}' /></td>					
					<td>a collection of elements</td>
					<td><T t='\{1,2,3,4\}' /></td>
				</tr>
				<tr>
					<td>Union</td>
					<td><T t='A \cup B' /></td>					
					<td>elements in either <T t='A' /> or <T t='B' /></td>
					<td><T t='\{1,2,3\} \cup \{4,5,6\} = \{1,2,3,4,5,6\}' /></td>
				</tr>
				<tr>
					<td>Intersect</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Subset</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Proper Subset</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Not a Subset</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Superset</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Proper Superset</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Not a Superset</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Element of (in)</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Not an element of</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Complement</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Exclusion</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Empty Set</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Equality</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				
				<tr>
					<td>Natural Numbers</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Integers</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Rational Numbers</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Real Numbers</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				<tr>
					<td>Complex Numbers</td>
					<td><T t='A \cap B' /></td>					
					<td>elements in both <T t='A' /> and <T t='B' /></td>
					<td><T t='\{1,2,3\} \cap \{2,3,4\} = \{2,3\}' /></td>
				</tr>
				
				
			</tbody>
		</table>
	</div>
)

export default SetNotation