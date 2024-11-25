<h2>Theory:</h2>

<p>
When discussing storage and complexity in the context of systems of linear equations, we are primarily concerned with how computational resources are utilized to solve such systems efficiently
</p>

<h3>Storage:</h3>
<p>In the context of systems of linear equations, storage refers to how we store the coefficients of the equations and the constants on the right-hand side. Typically, a system of linear equations can be represented in matrix form:</p>

$$ AX=B $$

<p>where,
   <ul>
      <li>A is the coefficient matrix (an m x n matrix)</li>
      <li>X is the vector of unknowns (an n-dimensional vector)</li>
      <li>B is the vector of constant (an m-dimensional vector)</li>
   </ul>
</p>

<br>

<p>
   Storage considerations include:
   <ul>
      <li>
         <strong>Memory Usage:</strong> The size of matrices A, B and X determines the memory requirements. For large systems, this can be significant.
      </li>
      <li>
         <strong>Data Structures:</strong> Efficient data structures are used to store sparse or dense matrices, which affect the storage requirements and computational efficiency
      </li>
   </ul>
</p>

<br>

<h3>Complexity:</h3>
<p>
   Complexity in solving systems of linear equations relates to the computational effort required to obtain the solution X.

   <ol>
      <li>
         <strong>Algorithmic Complexity:</strong> Different methods for solving linear systems have varying computational complexities.
         <ul>
            <li>
               <strong>Direct Methods:</strong> These include Gaussian elimination, LU decomposition, and Cholesky decomposition. They typically have a complexity of O(n<sup>3</sup>) for an n x n matrix.
            </li>
            <li>
               <strong>Iterative methods:</strong> Such as Jacobi method, Gauss-Seidel method, and conjugate gradient method, which are often used for large sparse systems. Their convergence rates and computational complexities vary, typically requiring fewer operations per iteration but potentially more iterations to converge.
            </li>
         </ul>
      </li>
      <li>
         <strong>Storage and Computational Cost:</strong> Direct methods may require more storage for large matrices, whereas iterative methods may require less storage but more iterations to achieve a solution.
      </li>
      <li>
         <strong>Numerical Stability:</strong> This refers to how errors propagate during computation, affecting the accuracy of the solution. Some methods may be more prone to numerical instability than others, influencing the complexity of implementing and ensuring accurate solutions
      </li>
   </ol>
</p>

<br>

<p>
   Relationship between Storage and Complexity:
   <ul>
      <li>
         <strong>Impact of Matrix Size:</strong> Larger matrices (higher than n and m) require more storage and computational effort to solve, regardless of the method used.
      </li>
      <li>
         <strong>Sparse vs Dense Matrices:</strong> Sparse matrices (with many zeros) can be stored more efficiently and often benefit more iterative methods due to their lower storage and computational requirements per iteration.
      </li>
      <li>
         <strong>Choice of Method:</strong> The method chosen affects both storage and computational complexity. Direct methods are straightforward but may be impractical for very large systems more efficiently but require careful tuning for convergence and stability.
      </li>
   </ul>
</p>

<br>

<p>
   Storage Complexity:
   <ul>
      <li>
         <strong>Dense matrix:</strong> O(n<sup>2</sup>) storage required, where n is the number of variables.
      </li>
      <li>
         <strong>Sparse matrix:</strong> 0(nnz) storage required, where n is the number of variables.
      </li>
      <li>
         <strong>Band matrix:</strong> 0(n) storage required, where n is the number of variables.
      </li>
   </ul>
</p>

<br>

<p>In conclusion, in the context of systems of linear equations, storage and complexity are critical
considerations that influence the choice of solution methods and the practical feasibility of
solving large-scale problems efficiently. Understanding the storage and complexity aspects is
crucial for selecting appropriate methods to solve systems of linear equations efficiently. Sparse
matrices offer significant advantages in terms of storage, while both direct and iterative methods
cater to different matrix properties and computational requirements. Careful consideration of
matrix structure, size, and numerical properties is essential for choosing the optimal approach.</p>

<p>
   In this experiment we learn how to make sparse matrices more compact to efficiently utilize resources required to store their element
</p>

$$
   \begin{bmatrix}
      1 & 3 & 0 & 0 \\
      -2 & 5 & 1 & 0 \\
      0 & 4 &3 & -1 \\
      0 & 0& 4 &5
   \end{bmatrix}
$$

<p>
   Given a banded matrix, store the elements in a compact manner by omitting the outlier O's and storing only the elements in the band (a,b,c).
</p>

$$
   \begin{array}{|c|c|c|}
\hline
a & b & c \\
\hline
0 & 1 & 3 \\
\hline
-2 & 5 & 1 \\
\hline
4 & 3 & -1 \\
\hline
4 & 5 & 0 \\
\hline
\end{array}
$$

<br>
<br>

<h4>Skyline storage format:</h4>

$$
   \begin{array}{|c|c|c|c|c|}
   \hline
   1 & -1 & * & -3  & * \\
   \hline
   -1 & 5 & * & * & * \\
   \hline
   *& * & 4  & 6  & 4 \\
   \hline
   -3 & * & 6 & 7 & * \\
   \hline
   *& * & 4 & * & -5 \\
   \hline
   \end{array}
$$

<p>
   Given a symmetric sparse matrix, fill in the diagonal elements and the skyline elements
considering the lower triangular matrix. If there is no skyline element, enter 0.
</p>

<br>

<p>
   <strong>Diagonal Elements</strong>
</p>


$$
   \begin{array}{|c|}
      \hline
      1\\
      \hline
      5\\
      \hline
      4\\
      \hline
      7\\
      \hline
      -5\\
      \hline
   \end{array}
$$

<br>
<br>

<p><strong>Skyline Elements</strong></p>

$$
   \begin{array}{|c|c|c|c|c|}
      \hline
      -1 & 0 & 6 & 0 & 0 \\
      \hline
      -3 & 0 & 4 & 0 &0 \\
      \hline
   \end{array}
$$

<p>Next we understand how to choose efficient algorithms based on time and space complexity.</p>

<br>

<h3>Time complexity and space complexity</h3>

<p>Time complexity and space complexity are two important concepts in computer science that help analyze the efficiency of algorithms</p>

<h3>Time Complexity:</h3>
<p>
   <ul>
      <li>
         Refers to the amount of time an algorithm takes to complete.
      </li>
      <li>
         Measured in terms of the number of operations (e.g., comparisons,assignments, etc.) performed.
      </li>
      <li>
         Usually expressed as a function of the input size (e.g., n, where n is the number of elements).
      </li>
   </ul>
</p>

<br>

<p>
   Examples:
   <ul>
      <li>O(n²) - quadratic time complexity (e.g., bubble sort)</li>
      <li>O(nlogn) ⁃ linearithmic time complexity (e.g., merge sort)</li>
      <li>O(n) - linear time complexity (e.g., finding an element in an array)</li>
      <li>O(logn) ⁃ logarithmic time complexity (e.g., binary search)</li>
      <li>0(1) ⁃ constant time complexity (e.g., accessing an element in an array by index)</li>
   </ul>
</p>

<br>

<h3>Space Complexity:</h3>

<p>
   <ul>
      <li>Refers to the amount of memory an algorithm uses.</li>
      <li>Measured in terms of the number of bytes or words required.</li>
      <li>Usually expressed as a function of the input size (e.g., n).</li>
   </ul>
</p>

<br>

<p>
   Examples:
   <ul>
      <li>O(n²) - quadratic time complexity (e.g., storing a matrix)</li>
      <li>0(n) - linear time complexity (e.g., storing an array)</li>
      <li>O(logn) - logarithmic time complexity (e.g., storing a balanced search tree)</li>
      <li>0(1) -constant time complexity (e.g., accessing an element in an array by index)</li>
   </ul>
</p>

<p>
   In summary, when dealing with systems of linear equations, "storage" refers to the memory required to hold the data, while "complexity" refers to the computational effort required to solve the system. Both storage and complexity considerations become crucial as the size of the system grows, influencing the choice of algorithms and the feasibility of solving large-scale problems
</p>