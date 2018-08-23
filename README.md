# HR-yelp-top-shelf
This is a backend focus project

cmd to copy csv file to db
\copy businesses(restaurant,rating,price,category,street,city,state,zip,country,website,email,phone) FROM '/Users/dannylu8/Desktop/Immersive/hr23/Practice/Backend-Cap/HR-yelp-top-shelf/data-psql.csv' CSV HEADER;

cmd to apachebench post route
ab -p /Users/dannylu8/Desktop/Immersive/hr23/Practice/Backend-Cap/HR-yelp-top-shelf/post-benchmark.txt -T application/json -c 10 -n 1000 localhost:3006/main/biz/

maintain index
vacuum full analyze table_name;