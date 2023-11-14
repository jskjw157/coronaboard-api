const {GlobalStat} = require('../database');

async function getAll(req, res) {
    const result = await GlobalStat.findAll();
    res.status(200).json({ result });
}

async function insertOrUpdate(req, res) {
    const { cc, date } = req.body;
    if(!cc || !date) {
        res.status(400).json({ message: 'cc and date are required' });
        return;
    }
    
    // 조건(국가 코드와 날짜)에 맞는 데이터 개수 확인
    const count = await GlobalStat.count({ where: { cc, date }});

    if(count === 0) {
        // 데이터가 없으면 새로운 데이터 생성
        await GlobalStat.create(req.body);
    } else {
        // 데이터가 있으면 데이터 수정
        await GlobalStat.update(req.body, { where: { cc, date }});
    }
}

async function remove(req, res) {
    const { cc, date } = req.body;
    if ( !cc || !date) {
        res.status(400).json({ message: 'cc and date are required' });
        return;
    }

    await GlobalStat.destroy({
        where: { cc, date },
    });

    res.status(200).json({ result: 'success' });
}

