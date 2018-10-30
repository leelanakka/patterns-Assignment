for TESTFILE in test/*Test.js
do
  echo $TESTFILE
  node $TESTFILE
done
